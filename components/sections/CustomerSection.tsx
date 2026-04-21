import { FeatureRow } from "./FeatureRow";
import { PhoneMockup } from "@/components/mock/PhoneMockup";
import { CustomerListScreen } from "@/components/mock/CustomerListScreen";
import { type Dict } from "@/lib/dictionaries";

export function CustomerSection({ dict }: { dict: Dict["customers"] }) {
  return (
    <FeatureRow
      id="screens"
      eyebrow="01 · Müşteriler"
      title={dict.title}
      body={dict.body}
      bullets={dict.bullets}
      mockup={
        <PhoneMockup>
          <CustomerListScreen />
        </PhoneMockup>
      }
    />
  );
}
