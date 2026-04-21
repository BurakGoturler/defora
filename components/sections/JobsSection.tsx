import { FeatureRow } from "./FeatureRow";
import { PhoneMockup } from "@/components/mock/PhoneMockup";
import { JobsScreen } from "@/components/mock/JobsScreen";
import { type Dict } from "@/lib/dictionaries";

export function JobsSection({ dict }: { dict: Dict["jobs"] }) {
  return (
    <FeatureRow
      eyebrow="02 · İşler"
      title={dict.title}
      body={dict.body}
      bullets={dict.bullets}
      reverse
      mockup={
        <PhoneMockup>
          <JobsScreen />
        </PhoneMockup>
      }
    />
  );
}
