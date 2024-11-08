import { notFound } from "next/navigation";
import PetProfile from "./PetProfile";
import VaccinationHistory from "./VaccinationHistory";
import GroomingAppointments from "./GroomingAppointments";
import DietPreferences from "./DietPreferences";
import HealthMilestones from "./HealthMilestones";
import Reminders from "./Reminders";
import { createClient } from "@/utils/supabase/server";

const getPetData = async (id: number) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("pets")
    .select(
      "*, vaccinations(*), grooming_appointments(*), diet_preferences(*), health_milestones(*), reminders(*)"
    )
    .eq("pet_id", id)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
};

export default async function PetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const petData = await getPetData(parseInt((await params).id));

  if (!petData) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{petData.name}&apos;s Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PetProfile pet={petData} />
        <VaccinationHistory vaccinations={petData.vaccinations} />
        <GroomingAppointments appointments={petData.grooming_appointments} />
        <DietPreferences dietPreferences={petData.diet_preferences} />
        <HealthMilestones healthMilestones={petData.health_milestones} />
        <Reminders reminders={petData.reminders} />
      </div>
    </div>
  );
}
