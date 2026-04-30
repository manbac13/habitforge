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
import useTracker from "@/features/tracker/trackerHook";
import { v4 as uuidv4 } from "uuid";

const labelStyle = {
  fontWeight: 500,
  colot: "#141414",
};

const AddTrackerDialog = ({ open, onClose, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(goalSchema),
    defaultValues: {
      title: "",
      description: "",
      unit_name: "",
      units_completed: 0,
      total_units: 1,
      status: "pending",
    },
  });

  const { addTrackerDataAction, updateTrackerDataAction } = useTracker();
  const isEditMode = !!data;

  const onSubmit = (formData) => {
    console.log("FORM DATA:", formData);
    if (isEditMode) {
      const updatedData = {
        ...formData,
        id: data.id,
      };
      updateTrackerDataAction(updatedData);
    } else {
      const newData = {
        ...formData,
        id: uuidv4(),
        createdAt: new Date().toISOString(),
      };
      addTrackerDataAction(newData);
    }

    reset();
    onClose();
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
              <FormLabel sx={{ ...labelStyle }}>Title</FormLabel>
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
