import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type HealthMilestones = {
  date_recorded: string | null;
  exercise_routine: string | null;
  health_milestone_id: number;
  pet_id: number | null;
  weight: number | null;
}[];

export default function HealthMilestones({
  healthMilestones,
}: {
  healthMilestones: HealthMilestones;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Health Milestones</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Weight</TableHead>
              <TableHead>Exercise Routine</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {healthMilestones.map((milestone: any) => (
              <TableRow key={milestone.health_milestone_id}>
                <TableCell>{milestone.date_recorded}</TableCell>
                <TableCell>{milestone.weight} kg</TableCell>
                <TableCell>{milestone.exercise_routine}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
