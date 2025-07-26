// app/api/checkWl/route.ts
import { NextResponse } from "next/server";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase.config";

export async function GET(request: Request) {
  try {
    // Parse the `address` from the query string
    const { searchParams } = new URL(request.url);
    const address = searchParams.get("address");

    if (!address) {
      return NextResponse.json(
        { success: false, error: "Missing or invalid address in query" },
        { status: 400 },
      );
    }

    const docRef = doc(db, "punkameleons", address);
    const docSnap = await getDoc(docRef);

    // If the doc doesn't exist, return success with data: null.
    // This lets the UI know the address is simply not whitelisted.
    if (!docSnap.exists()) {
      return NextResponse.json({ success: true, data: null }, { status: 200 });
    }

    // Update the 'check' field to true
    await updateDoc(docRef, {
      check: true,
    });

    // Return the updated data
    const updatedData = { ...docSnap.data(), check: true };

    return NextResponse.json(
      {
        success: true,
        data: updatedData,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    const message = error instanceof Error ? error.message : String(error);

    return NextResponse.json(
      {
        success: false,
        error: message,
      },
      { status: 500 },
    );
  }
}
