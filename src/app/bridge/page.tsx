import { BridgeKit } from "@/components";
import { Metadata } from "next";

export function generateMetadata(): Promise<Metadata> {
  return Promise.resolve({
    title: "Bridge | WiseBets",
    icons: "/wisebets.png",
  });
}

export default function Bridge() {
  return <BridgeKit />;
}
