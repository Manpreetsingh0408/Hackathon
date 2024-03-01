import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import './BlogForm.css'
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Textarea
} from "@chakra-ui/react";

export default function NewPost() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    setValue
  } = useForm();
  // console.log(watch())
  return (
    <div className="form-parent">
      <form className="form">
        <Text as="b" fontSize="2.3vmax">New Blog</Text>
        <Text as="i" fontSize="1vmax">Enter the following details!</Text>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">Username</FormLabel>
          <Input
            type="text"
            borderColor="black"
            {...register("user", {
              required: "Username is required"
            })}
          />
          <p className="err">{errors.user?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">Title</FormLabel>
          <Input

            type="text"
            borderColor="black"
            {...register("title", {
              required: "Title is required",
              maxLength:{ value: 40, message: "Max 40 Chars" }
            })}
          />
          <p className="err">{errors.title?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">Blog</FormLabel>
          <Textarea
            type="text"
            borderColor="black"
            {...register("blog", {
              required: "blog is required",
            })}
          />
          <p className="err">{errors.blog?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">Image Link</FormLabel>
          <Input
            type="text"
            borderColor="black"
            {...register("image", {
              required: "Provide a valid image url",
            })}
          />
          <p className="err">{errors.image?.message}</p>
        </FormControl>
        <Button type="submit" colorScheme="red">Submit</Button>
      </form>
    </div>
  );
}