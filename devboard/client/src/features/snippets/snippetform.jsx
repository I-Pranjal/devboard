import { useState } from 'react';

const SnippetForm = ({addSnippet}) => {
    const initialform = {
        title: '',
        description: '',
        language: '',
        snippet: '',
        id : Math.random().toString(36).substring(2, 15),
        tags: ''
    };
    const [form, setForm] = useState(initialform);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addSnippet(form);
        setForm(initialform); // Reset form after submission
    };

    return (
        <div className="m-2 text-gray-900 dark:text-gray-100">
            <form
                className="flex flex-col gap-4 mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                onSubmit={handleSubmit}
            >
                <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                    Add a Code Snippet
                </h1>
                <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                />
                <input
                    type="text"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                />
                <input
                    type="text"
                    name="language"
                    value={form.language}
                    onChange={handleChange}
                    placeholder="Language"
                    className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                />
                <textarea
                    name="snippet"
                    value={form.snippet}
                    onChange={handleChange}
                    placeholder="Snippet"
                    className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                ></textarea>
                <textarea
                    name = "tags"
                    value={form.tags}
                    onChange={handleChange}
                    placeholder="Tags (comma-separated)"
                    className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                ></textarea>
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-black w-fit p-2 rounded-md font-semibold font-mono"
                >
                    Add Snippet
                </button>
            </form>
        </div>
    );
};

export default SnippetForm;