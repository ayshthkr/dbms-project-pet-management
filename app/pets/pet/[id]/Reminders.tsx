import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Reminders = {
  description: string | null;
  pet_id: number | null;
  reminder_date: string | null;
  reminder_id: number;
}[];

export default function Reminders({ reminders }: { reminders: Reminders }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reminders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reminders.map((reminder: any) => (
              <TableRow key={reminder.reminder_id}>
                <TableCell>{reminder.reminder_date}</TableCell>
                <TableCell>{reminder.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
