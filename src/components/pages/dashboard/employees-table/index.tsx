import React, { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Search, User, Printer, BarChart3, Filter, Edit } from "lucide-react";

// Define the employee data type
type Employee = {
  id: number;
  name: string;
  employeeId: string;
  phone: string;
  appliedShift: string;
  substitute: string;
  status: string;
  comments: string;
};

const employeesData: Employee[] = [
  {
    id: 1,
    name: "Andrew Jacob",
    employeeId: "ADBW-124K9",
    phone: "+971 00 123 4567",
    appliedShift: "9:00 - 15:00\nAll Days",
    substitute: "N/A",
    status: "Active",
    comments: "N/A",
  },
  {
    id: 2,
    name: "John Castrevich",
    employeeId: "ADBW-832F7",
    phone: "+971 00 123 4567",
    appliedShift: "9:00 - 13:00,\nSun, Mon, Tue, Sat",
    substitute: "N/A",
    status: "Active Substitute",
    comments: "N/A",
  },
  {
    id: 3,
    name: "Sarah Williams",
    employeeId: "ADBW-456L2",
    phone: "+971 00 123 4568",
    appliedShift: "8:00 - 16:00\nMon, Tue, Wed, Thu, Fri",
    substitute: "N/A",
    status: "Active",
    comments: "N/A",
  },
  {
    id: 4,
    name: "Mike Johnson",
    employeeId: "ADBW-789M3",
    phone: "+971 00 123 4569",
    appliedShift: "10:00 - 18:00\nAll Days",
    substitute: "John Castrevich",
    status: "Inactive",
    comments: "On leave",
  },
];

export default function EmployeesTable() {
  const columns = useMemo<MRT_ColumnDef<Employee>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        size: 150,
        Cell: ({ cell }) => (
          <span className="font-medium text-gray-900">
            {cell.getValue<string>()}
          </span>
        ),
      },
      {
        accessorKey: "employeeId",
        header: "ID",
        size: 120,
      },
      {
        accessorKey: "phone",
        header: "Phone",
        size: 150,
      },
      {
        accessorKey: "appliedShift",
        header: "Applied Shift",
        size: 200,
        Cell: ({ cell }) => (
          <div className="whitespace-pre-line text-sm">
            {cell.getValue<string>()}
          </div>
        ),
      },
      {
        accessorKey: "substitute",
        header: "Substitute",
        size: 150,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 150,
        Cell: ({ cell }) => {
          const status = cell.getValue<string>();
          const getStatusColor = (status: string) => {
            switch (status) {
              case "Active":
                return "text-red-600";
              case "Active Substitute":
                return "text-blue-600";
              case "Inactive":
                return "text-gray-500";
              default:
                return "text-gray-700";
            }
          };
          return (
            <span className={`font-medium ${getStatusColor(status)}`}>
              {status}
            </span>
          );
        },
      },
      {
        accessorKey: "comments",
        header: "Comments",
        size: 120,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: employeesData,
    enableRowSelection: true,
    enableColumnFilters: false,
    enableColumnActions: false,
    enableColumnOrdering: false,
    enableSorting: false,
    enableTopToolbar: false,
    enableBottomToolbar: true,
    enablePagination: true,
    initialState: {
      pagination: {
        pageSize: 25,
        pageIndex: 0,
      },
    },
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "none",
    enableRowActions: true,
    positionActionsColumn: "last",
    renderRowActions: () => (
      <button className="text-red-500 hover:text-red-700 p-1">
        <Edit size={16} />
      </button>
    ),
    muiTableProps: {
      sx: {
        "& .MuiTableHead-root": {
          "& .MuiTableRow-root": {
            backgroundColor: "#f9fafb",
          },
          "& .MuiTableCell-root": {
            fontSize: "0.75rem",
            fontWeight: 500,
            color: "#6b7280",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            padding: "12px 16px",
          },
        },
        "& .MuiTableBody-root": {
          "& .MuiTableRow-root": {
            "&:hover": {
              backgroundColor: "#f9fafb",
            },
          },
          "& .MuiTableCell-root": {
            padding: "16px",
            fontSize: "0.875rem",
            borderBottom: "1px solid #e5e7eb",
          },
        },
      },
    },
    muiSelectCheckboxProps: {
      sx: {
        color: "#3b82f6",
        "&.Mui-checked": {
          color: "#3b82f6",
        },
      },
    },
    muiPaginationProps: {
      rowsPerPageOptions: [10, 25, 50, 100],
      showFirstButton: false,
      showLastButton: false,
    },
  });

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900">Employees</h1>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded hover:bg-gray-100">
            <Search size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded hover:bg-gray-100">
            <User size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded hover:bg-gray-100">
            <Printer size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded hover:bg-gray-100">
            <BarChart3 size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded hover:bg-gray-100">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Material React Table */}
      <div className="overflow-hidden">
        <MaterialReactTable table={table} />
      </div>
    </div>
  );
}
