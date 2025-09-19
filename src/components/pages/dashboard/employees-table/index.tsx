import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  type ColumnDef,
} from "@tanstack/react-table";
import {
  Search,
  User,
  Printer,
  BarChart3,
  Filter,
  Edit,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
];

export default function EmployeesTable() {
  const [rowSelection, setRowSelection] = useState({});

  const columns = useMemo(
    (): ColumnDef<Employee>[] => [
      {
        id: "select",
        header: ({ table }) => (
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
        ),
        cell: ({ row }) => (
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            checked={row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
        size: 50,
      },
      {
        accessorKey: "name",
        header: "Name",
        cell: (info) => (
          <span className="font-medium text-gray-900">
            {info.getValue() as string}
          </span>
        ),
        size: 150,
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
        cell: (info) => (
          <div className="whitespace-pre-line text-sm">
            {info.getValue() as string}
          </div>
        ),
        size: 200,
      },
      {
        accessorKey: "substitute",
        header: "Substitute",
        size: 150,
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: (info) => {
          const status = info.getValue() as string;
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
        size: 150,
      },
      {
        accessorKey: "comments",
        header: "Comments",
        size: 120,
      },
      {
        id: "actions",
        header: "",
        cell: () => (
          <button className="text-red-500 hover:text-red-700 p-1">
            <Edit size={16} />
          </button>
        ),
        size: 50,
      },
    ],
    []
  );

  const table = useReactTable({
    data: employeesData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
    enableRowSelection: true,
    initialState: {
      pagination: {
        pageSize: 25,
      },
    },
  });

  return (
    <div className="bg-white rounded-xl">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900">Employees</h1>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded hover:bg-gray-100">
            <Search size={18} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded hover:bg-gray-100">
            <User size={18} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded hover:bg-gray-100">
            <Printer size={18} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded hover:bg-gray-100">
            <BarChart3 size={18} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded hover:bg-gray-100">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden">
        <table className="w-full">
          <thead className="bg-white border-b border-gray-200">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    style={{ width: header.getSize() }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-4 text-sm text-gray-900">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">Rows per page:</span>
          <select
            className="border border-gray-300 rounded px-2 py-1 text-sm"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 25, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">
            {table.getState().pagination.pageIndex + 1}-
            {Math.min(
              (table.getState().pagination.pageIndex + 1) *
                table.getState().pagination.pageSize,
              table.getFilteredRowModel().rows.length
            )}{" "}
            of {table.getFilteredRowModel().rows.length}
          </span>

          <div className="flex items-center space-x-1">
            <button
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
