import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type GroomingAppointments = {
  appointment_date: string | null;
  groomer_name: string | null;
  grooming_appointment_id: number;
  notes: string | null;
  pet_id: number | null;
}[];

export default function GroomingAppointments({
  appointments,
}: {
  appointments: GroomingAppointments;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Grooming Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Groomer</TableHead>
              <TableHead>Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((apt: any) => (
              <TableRow key={apt.grooming_appointment_id}>
                <TableCell>{apt.appointment_date}</TableCell>
                <TableCell>{apt.groomer_name}</TableCell>
                <TableCell>{apt.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
