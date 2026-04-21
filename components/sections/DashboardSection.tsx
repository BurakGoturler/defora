import { FeatureRow } from "./FeatureRow";
import { PhoneMockup } from "@/components/mock/PhoneMockup";
import { DashboardScreen } from "@/components/mock/DashboardScreen";
import { type Dict } from "@/lib/dictionaries";

export function DashboardSection({ dict }: { dict: Dict["dashboard"] }) {
  return (
    <FeatureRow
      eyebrow="03 · Dashboard"
      title={dict.title}
      body={dict.body}
      bullets={dict.bullets}
      mockup={
        <PhoneMockup>
          <DashboardScreen animate />
        </PhoneMockup>
      }
    />
  );
}
