import { z } from "zod";

export const goalSchema = z
  .object({
    id: z.string().optional(),
    title: z.string().min(3, "Title is required."),
    description: z.string().optional(),
    unit_name: z.string().min(1, "Unit name is required."),
    units_completed: z
      .number({
        required_error: "Units completed is required",
        invalid_type_error: "Must be a number",
      })
      .min(0, "It must be greater than 0"),

    total_units: z
      .number({
        required_error: "Total units is required",
        invalid_type_error: "Must be a number",
      })
      .min(1, "It must be greater than 1"),
    createdAt: z.string().optional(),
  })
  .refine((data) => data.units_completed <= data.total_units, {
    message: "Completed units cannot exceed total units",
    path: ["units_completed"],
  })
  .transform((data) => {
    const status =
      data.units_completed === 0
        ? "pending"
        : data.units_completed === data.total_units
          ? "completed"
          : "in_progress";

    return {
      ...data,
      status,
    };
  });
