import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuUpload } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

const Add_News = () => {
    const { register, handleSubmit, errors } = useForm();
    const [images, setImages] = useState([]);
    const [fileNames, setFileNames] = useState([]);
    const [tags, setTags] = useState([]);








    // tags information
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const newTag = e.target.value.trim();
            if (newTag !== '') {
                setTags([...tags, newTag]);
                e.target.value = '';
            }
        }
    };

    const removeTag = (indexToRemove) => {
        setTags(tags?.filter((_, index) => index !== indexToRemove));
    };



    // image irformation

    const handleImageChange = (files) => {
        const newImages = [...images];
        const newFileNames = [...fileNames];

        for (let i = 0; i < files.length; i++) {
            newImages.push(URL.createObjectURL(files[i]));
            newFileNames.push(files[i].name);
        }

        setImages(newImages);
        setFileNames(newFileNames);
    };

    const handleRemoveImage = (index) => {
        const newImages = [...images];
        const newFileNames = [...fileNames];
        newImages.splice(index, 1);
        newFileNames.splice(index, 1);
        setImages(newImages);
        setFileNames(newFileNames);
    };




    const onSubmit = (data) => {
        const currentTime = new Date();
        data.publish_date = currentTime.toLocaleString();
        data.images = images;
        data.tags = tags;
        console.log(data);

        // Add code to send form data to backend or perform other actions
    };


    return (

        <div className="container mx-auto md:mt-4 px-1 bg-gray-700">
            <h1 className='py-2 text-white font-bold px-4'> Add News Page </h1>
            <form onSubmit={handleSubmit(onSubmit)} className=" shadow-md rounded px-4 pt-4 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-white  text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        placeholder="Title"
                        required
                        {...register("title")}
                    />
                </div>


                <div className="mb-4">
                    <label className="block text-white  text-sm font-bold mb-2">
                        Category
                    </label>
                    <select className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " id="category" {...register("category")}  required  >
                        <option value="" className='text-gray-200'> Selected Category</option>
                        <option value="burger">Burger</option>
                        <option value="snack">Snack </option>
                        <option value="beverage">Beverage </option>
                    </select>
                </div>


                {/* tag */}

                <div className="mb-4">
                    <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="tags">
                        Tags (Enter separated)
                    </label>
                    <div className="flex flex-wrap">
                        {tags?.map((tag, index) => (
                            <div key={index} className="flex items-center bg-gray-200 text-green-600 mb-1 rounded-lg px-3 py-1 mr-2 mt-1">
                                {tag}
                                <button type="button" className="ml-2 " onClick={() => removeTag(index)}>
                                    &#10005;
                                </button>
                            </div>
                        ))}
                        <input
                            className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 bg-gray-200 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            id="tags"
                            type="text"
                            placeholder="Tags Names"
                            onKeyDown={handleKeyDown}
                        />
                    </div>




                    {/* Image input */}
                    <div className="mt-6">

                        <div className=" grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 items-center mt-2">
                            {images.map((image, index) => (
                                <div key={index} className="relative mr-4 mb-4">
                                    <img
                                        src={image}
                                        alt={fileNames[index]}
                                        className="max-h-40 w-auto"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveImage(index)}
                                        className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                                    >
                                        <MdDeleteOutline />
                                    </button>
                                </div>
                            ))}
                        </div>
                        {/* Upload button */}
                        <label className="text-gray-600 ">Up Load Image</label>

                        <div
                            onClick={() => document.querySelector("#image").click()}
                            className="cursor-pointer mt-4 p-4 border border-gray-600 rounded-md flex items-center justify-center"
                        >
                            <LuUpload className="text-3xl text-[#F01543] mx-auto"></LuUpload>{" "}
                            <p className="ml-2"></p>{" "}
                        </div>
                        {/* Hidden file input */}
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            className="hidden"
                            multiple
                            onChange={(e) => handleImageChange(e.target.files)}
                        />
                    </div>



                    {/* description */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            placeholder="Description"
                            required
                            {...register("description")}
                        />
                        {/* {errors.description && <p className="text-red-500 text-xs italic">Description is required</p>} */}
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Add_News;
