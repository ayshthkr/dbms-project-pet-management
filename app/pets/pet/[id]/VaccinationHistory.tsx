import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Vaccinations = {
  date_administered: string | null;
  next_due_date: string | null;
  pet_id: number | null;
  vaccination_id: number;
  vaccine_name: string | null;
}[];

export default function VaccinationHistory({
  vaccinations,
}: {
  vaccinations: Vaccinations;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vaccination History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Vaccine</TableHead>
              <TableHead>Administered</TableHead>
              <TableHead>Next Due</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vaccinations.map((vax: any) => (
              <TableRow key={vax.vaccination_id}>
                <TableCell>{vax.vaccine_name}</TableCell>
                <TableCell>{vax.date_administered}</TableCell>
                <TableCell>{vax.next_due_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
