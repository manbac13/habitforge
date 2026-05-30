import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormLabel,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { goalSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useGoals from "@/features/goals/goalsHook";
import { notify } from "@/utils/notify/notify";

const AddTrackerDialog = ({ open, onClose, data, parentClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(goalSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      unit_name: "",
      units_completed: 0,
      total_units: 1,
    },
  });

  const { createGoalAction, updateGoalAction, loading, getAllGoalsAction } =
    useGoals();
  const isEditMode = !!data;

  const onSubmit = async (formData) => {
    try {
      if (isEditMode) {
        const updatedData = {
          ...formData,
          id: data._id,
        };
        const res = await updateGoalAction(updatedData).unwrap();
        notify({ message: res.message, severity: "success" });
      } else {
        const newData = {
          ...formData,
        };
        const res = await createGoalAction(newData).unwrap();
        notify({ message: res.message, severity: "success" });
      }
      await getAllGoalsAction().unwrap();
      reset();
      onClose();
      if (parentClose) {
        parentClose();
      }
    } catch (error) {
      notify({ message: error, severity: "error" });
      console.error(error);
    }
  };

  useEffect(() => {
    if (data) {
      reset(data);
    } else {
      reset({
        title: "",
        description: "",
        unit_name: "",
        units_completed: 0,
        total_units: 1,
      });
    }
  }, [data, reset]);

  const unitName = watch("unit_name") || "Units";
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add a Goal</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Stack spacing={1}>
              <FormLabel>Title</FormLabel>
              <TextField
                size="small"
                {...register("title")}
                error={!!errors.title}
                helperText={errors.title?.message}
                fullWidth
                placeholder="Enter title"
              />
            </Stack>
          </Grid>

          <Grid size={12}>
            <Stack spacing={1}>
              <FormLabel>Description</FormLabel>
              <TextField
                size="small"
                multiline
                rows={2}
                {...register("description")}
                error={!!errors.description}
                helperText={errors.description?.message}
                fullWidth
                placeholder="Enter description"
              />
            </Stack>
          </Grid>

          <Grid size={12}>
            <Stack spacing={1}>
              <FormLabel>Unit Name</FormLabel>
              <TextField
                size="small"
                {...register("unit_name")}
                error={!!errors.unit_name}
                helperText={errors.unit_name?.message}
                fullWidth
                placeholder="Enter unit name e.g. pages, km"
              />
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <FormLabel>{`${unitName} completed`}</FormLabel>
              <TextField
                size="small"
                type="number"
                {...register("units_completed", { valueAsNumber: true })}
                error={!!errors.units_completed}
                helperText={errors.units_completed?.message}
                fullWidth
              />
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <FormLabel>{`Total ${unitName}`}</FormLabel>
              <TextField
                size="small"
                type="number"
                {...register("total_units", { valueAsNumber: true })}
                error={!!errors.total_units}
                helperText={errors.total_units?.message}
                fullWidth
              />
            </Stack>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="error">
          Cancel
        </Button>
        <Button
          loading={loading}
          variant="contained"
          sx={{ background: (theme) => theme.palette.warning.dark }}
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTrackerDialog;
