import React, { useState } from "react";
import {
  Input,
  Textarea,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Select,
  Option,
} from "@material-tailwind/react";
import { Plus, X, SaveAll } from "lucide-react";

const ProjectForm = ({ setProjects }) => {
  const initialForm = {
    title: "",
    description: "",
    repoLink: "",
    deadline: "",
    status: "planned",
  };

  const [form, setForm] = useState(initialForm);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value) => {
    setForm({ ...form, status: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.description.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    setProjects((prev) => [...prev, form]);
    setForm(initialForm);
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="flex items-center gap-2 p-2 m-3 bg-blue-500 text-lg text-white"
      >
        <Plus />
        Add Project
      </Button>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="p-4 w-1/2 m-auto bg-gray-300"
      >
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Add New Project
          </Typography>
          <Typography className="mt-1 font-normal text-gray-600">
            Plan, manage, and track your development projects.
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleOpen}
          >
            <X strokeWidth={3} />
          </IconButton>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <DialogBody className="space-y-2 pb-3 font-mono">
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Project Title
              </label>
              <Input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter project title"
                className="p-3 rounded-lg"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Description
              </label>
              <Textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Brief project description"
                 className="p-3 rounded-lg"
                rows={3}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Repository Link
              </label>
              <Input
                name="repoLink"
                value={form.repoLink}
                onChange={handleChange}
                 className="p-3 rounded-lg"
                placeholder="e.g. https://github.com/username/project"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Deadline
              </label>
              <Input
                type="date"
                name="deadline"
                value={form.deadline}
                 className="p-3 rounded-lg"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Status
              </label>
              <Select
                value={form.status}
                onChange={handleSelectChange}
                label="Select Status"
                 className="p-2 rounded-lg w-auto px-10 flex text-md"
              >
                <Option value="planned">Planned</Option>
                <Option value="in-progress">In Progress</Option>
                <Option value="completed">Completed</Option>
              </Select>
            </div>
          </DialogBody>

          <DialogFooter>
            <Button
              type="submit"
              className="mr-auto bg-green-600 text-white flex text-md gap-2 hover:bg-green-700 shadow-md shadow-black p-3"
            >
              <SaveAll strokeWidth={1.25} /> Add Project
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};

export default ProjectForm;
