import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type DietPreferences = {
  diet_preference_id: number;
  feeding_schedule: string | null;
  food_type: string | null;
  pet_id: number | null;
  quantity: string | null;
}[];

export default function DietPreferences({
  dietPreferences,
}: {
  dietPreferences: DietPreferences;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Diet Preferences</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-2">
          <dt className="font-semibold">Food Type:</dt>
          <dd>{dietPreferences[0].food_type}</dd>
          <dt className="font-semibold">Quantity:</dt>
          <dd>{dietPreferences[0].quantity}</dd>
          <dt className="font-semibold">Feeding Schedule:</dt>
          <dd>{dietPreferences[0].feeding_schedule}</dd>
        </dl>
      </CardContent>
    </Card>
  );
}
