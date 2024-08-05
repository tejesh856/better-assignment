"use client";
import Header from "@/components/Header";
import Questions from "@/components/Questions";
import Review from "@/components/Review";
export default function Home() {
  return (
    <div className="h-full w-full">
      <Header />
      <Review />
      <Questions />
    </div>
  );
}
