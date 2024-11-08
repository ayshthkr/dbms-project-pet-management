"use client";

import { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataType } from "./page";
import { Button } from "@/components/ui/button";
import { useRouter } from "nextjs-toploader/app";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => (
  <div className="flex items-center justify-end space-x-2 py-4">
    <Button
      variant="outline"
      size="sm"
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      <ChevronLeft className="h-4 w-4" />
      Previous
    </Button>
    <div className="text-sm font-medium">
      Page {currentPage} of {totalPages}
    </div>
    <Button
      variant="outline"
      size="sm"
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
      <ChevronRight className="h-4 w-4" />
    </Button>
  </div>
);

export default function PetDashboard({ data }: { data: DataType }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("all");
  const [filterBreed, setFilterBreed] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const itemsPerPage = 10;
  const filteredPets = data.pets?.filter(
    (pet) =>
      pet?.name?.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterSpecies === "all" || pet.species === filterSpecies) &&
      (filterBreed === "all" || pet.breed === filterBreed)
  );
  const totalPages = Math.ceil((filteredPets?.length ?? 0) / itemsPerPage);
  const paginatedPets = filteredPets?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto p-4 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Pet Database Management Dashboard
      </h1>

      <div className="flex mb-4 gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search pets..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={filterSpecies} onValueChange={setFilterSpecies}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by species" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Species</SelectItem>
            <SelectItem value="Dog">Dogs</SelectItem>
            <SelectItem value="Cat">Cats</SelectItem>
          </SelectContent>
        </Select>
        <Select value={filterBreed} onValueChange={setFilterBreed}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by breed" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Breeds</SelectItem>
            {Array.from(new Set(data.pets?.map((pet) => pet.breed) || [])).map(
              (breed) => (
                <SelectItem key={breed} value={breed ?? ""}>
                  {breed}
                </SelectItem>
              )
            )}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Pets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{data.pets?.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Owners</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{data.owners?.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Vaccinations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">
              {
                data.vaccinations?.filter(
                  (v) => new Date(v.next_due_date ?? "") > new Date()
                ).length
              }
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Pets</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Species</TableHead>
                <TableHead>Breed</TableHead>
                <TableHead>Birth Date</TableHead>
                <TableHead>Owner</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedPets?.map((pet) => (
                <TableRow
                  key={pet.pet_id}
                  onClick={() => {
                    router.push(`/pets/pet/${pet.pet_id}`);
                  }}
                  className="hover:cursor-pointer"
                >
                  <TableCell>{pet.name}</TableCell>
                  <TableCell>{pet.species}</TableCell>
                  <TableCell>{pet.breed}</TableCell>
                  <TableCell>{pet.birth_date}</TableCell>
                  <TableCell>
                    {
                      data.owners?.find((o) => o.owner_id === pet.owner_id)
                        ?.name
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Vaccinations</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pet</TableHead>
                  <TableHead>Vaccine</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.vaccinations?.slice(0, 5).map((vaccination) => (
                  <TableRow key={vaccination.vaccination_id}>
                    <TableCell>
                      {
                        data.pets?.find((p) => p.pet_id === vaccination.pet_id)
                          ?.name
                      }
                    </TableCell>
                    <TableCell>{vaccination.vaccine_name}</TableCell>
                    <TableCell>{vaccination.date_administered}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Grooming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pet</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Groomer</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.groomingAppointments?.slice(0, 5).map((appointment) => (
                  <TableRow key={appointment.grooming_appointment_id}>
                    <TableCell>
                      {
                        data.pets?.find((p) => p.pet_id === appointment.pet_id)
                          ?.name
                      }
                    </TableCell>
                    <TableCell>{appointment.appointment_date}</TableCell>
                    <TableCell>{appointment.groomer_name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
