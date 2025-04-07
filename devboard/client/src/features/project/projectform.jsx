import { useState } from "react";

const initialProject = {
    title: "",
    description: "",
    repoLink: "",
    deadline: "",
    status: "planned"
};

const ProjectForm = ({ setProjects }) => {
    const [form, setForm] = useState(initialProject);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.title.trim() || !form.description.trim()) {
            alert("Please fill all fields");
            return;
        }

        setProjects((prev) => [...prev, form]);
        setForm(initialProject);
    };

    return (
        <form
            className="flex flex-col gap-4 p-6 mb-6 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm"
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Add New Project</h2>
            <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Project Title"
                className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Project Description"
                className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            ></textarea>
            <input
                type="text"
                name="repoLink"
                value={form.repoLink}
                onChange={handleChange}
                placeholder="Repository Link"
                className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            <input
                type="date"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
                <option value="planned">Planned</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <button
                type="submit"
                className="bg-blue-600 text-white p-2 w-fit rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-500 focus:outline-none text-sm"
            >
                Add Project
            </button>
        </form>
    );
};

export default ProjectForm;