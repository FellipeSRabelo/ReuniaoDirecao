import { ClassData, CourseSection } from "@/data/enrollment-data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ClassTableProps {
  data: CourseSection[];
}

export default function ClassTable({ data }: ClassTableProps) {
  return (
    <div className="space-y-8">
      {data.map((section) => (
        <div key={section.name} className="bg-slate-900/50 rounded-lg overflow-hidden shadow-sm">
          {/* Section Header */}
          <div className="bg-zinc-800 px-6 py-4 border-b border-zinc-700">
            <h3 className="text-lg font-semibold text-slate-50">
              {section.name}
            </h3>
            
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-slate-700 hover:bg-transparent">
                  <TableHead className="text-black font-bold">
                    Turma
                  </TableHead>
                  <TableHead className="text-black font-bold">
                    Turno
                  </TableHead>
                  <TableHead className="text-black font-bold">
                    Turma
                  </TableHead>
                  <TableHead className="text-left text-black font-bold">
                    Total
                  </TableHead>
                  <TableHead className="text-left text-black font-bold">
                    Masc.
                  </TableHead>
                  <TableHead className="text-left text-black font-bold">
                    Fem.
                  </TableHead>
                  <TableHead className="text-left text-black font-bold">
                    Outros
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {section.classes.map((cls, idx) => (
                  <TableRow
                    key={idx}
                    className="border-b border-slate-700 hover:bg-slate-800/50 transition-colors"
                  >
                    <TableCell className="font-medium text-black">
                      {cls.course}
                    </TableCell>
                    <TableCell className="font-medium text-black">
                      {cls.shift}
                    </TableCell>
                    <TableCell className="font-medium text-black">
                      {cls.classroom}
                    </TableCell>
                    <TableCell className="font-medium text-black">
                      {cls.totalStudents}
                    </TableCell>
                    <TableCell className="font-medium text-black">
                      {cls.male}
                    </TableCell>
                    <TableCell className="font-medium text-black">
                      {cls.female}
                    </TableCell>
                    <TableCell className="font-medium text-black">
                      {cls.others}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      ))}
    </div>
  );
}
