import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PetData = {
  birth_date: string | null;
  breed: string | null;
  name: string | null;
  owner_id: number | null;
  pet_id: number;
  species: string | null;
  vaccinations: {
    date_administered: string | null;
    next_due_date: string | null;
    pet_id: number | null;
    vaccination_id: number;
    vaccine_name: string | null;
  }[];
  grooming_appointments: any;
  diet_preferences: any;
  health_milestones: any;
  reminders: any;
};

export default function PetProfile({ pet }: { pet: PetData }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pet Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-2">
          <dt className="font-semibold">Name:</dt>
          <dd>{pet.name}</dd>
          <dt className="font-semibold">Species:</dt>
          <dd>{pet.species}</dd>
          <dt className="font-semibold">Breed:</dt>
          <dd>{pet.breed}</dd>
          <dt className="font-semibold">Birth Date:</dt>
          <dd>{new Date(pet.birth_date ?? "").toDateString()}</dd>
          <dt className="font-semibold">Owner:</dt>
          <dd>{pet.owner_id}</dd>
          <dt className="font-semibold">Contact:</dt>
          <dd>{pet.owner_id}</dd>
        </dl>
      </CardContent>
    </Card>
  );
}
