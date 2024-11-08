import { createClient } from "@/utils/supabase/server";
import PetDashboard from "./client";
import { redirect } from "next/navigation";

const generateFakeData = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/sign-in");
  }
  const { data: owners } = await supabase.from("owners").select("*");
  const { data: pets } = await supabase.from("pets").select("*");
  const { data: vaccinations } = await supabase
    .from("vaccinations")
    .select("*");
  const { data: groomingAppointments } = await supabase
    .from("grooming_appointments")
    .select("*");
  const { data: dietPreferences } = await supabase
    .from("diet_preferences")
    .select("*");
  const { data: healthMilestones } = await supabase
    .from("health_milestones")
    .select("*");
  const { data: reminders } = await supabase.from("reminders").select("*");

  return {
    owners,
    pets,
    vaccinations,
    groomingAppointments,
    dietPreferences,
    healthMilestones,
    reminders,
  };
};

export type DataType = {
  owners: Owner[] | null;
  pets: Pet[] | null;
  vaccinations: Vaccination[] | null;
  groomingAppointments: GroomingAppointment[] | null;
  dietPreferences: DietPreference[] | null;
  healthMilestones: HealthMilestone[] | null;
  reminders: Reminder[] | null;
};

type Owner = {
  owner_id: number;
  name: string | null;
  contact_info: string | null;
};

type Pet = {
  birth_date: string | null;
  breed: string | null;
  name: string | null;
  owner_id: number | null;
  pet_id: number;
  species: string | null;
};

type Vaccination = {
  vaccination_id: number;
  pet_id: number | null;
  date_administered: string | null;
  vaccine_name: string | null;
  next_due_date: string | null;
};

type GroomingAppointment = {
  appointment_date: string | null;
  groomer_name: string | null;
  grooming_appointment_id: number;
  notes: string | null;
  pet_id: number | null;
};

type DietPreference = {
  diet_preference_id: number;
  pet_id: number | null;
  feeding_schedule: string | null;
  food_type: string | null;
  quantity: string | null;
};

type HealthMilestone = {
  health_milestone_id: number;
  pet_id: number | null;
};

type Reminder = {
  reminder_id: number;
  pet_id: number | null;
  reminder_date: string | null;
};

export default async function Page() {
  const data: DataType = await generateFakeData();
  return <PetDashboard data={data} />;
}
