"use client";

import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  general?: string;
}

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): FormErrors => {
    let newErrors: FormErrors = {};
    const tName = name.trim();
    const tEmail = email.trim();
    const tMessage = message.trim();

    if (!tName) newErrors.name = "Name is required";
    if (!tEmail) {
      newErrors.email = "Email is required";
    } else if (!z.string().email().safeParse(tEmail).success) {
      newErrors.email = "Invalid email address";
    }
    if (!tMessage) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
          setSubmitSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
        } else {
          const errorData = await response.json();
          setErrors(errorData.errors || { general: errorData.message || "An unexpected error occurred." });
        }
      } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.error("Network error:", error);
        }
        setErrors({ general: "Failed to connect to the server. Please try again later." });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Contact Us</CardTitle>
          <CardDescription className="text-center">
            We'd love to hear from you! Please fill out the form below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {submitSuccess ? (
            <div>
              <div className="text-center text-green-600 font-semibold">
                Thank you for your message! We will get back to you shortly.
              </div>
              <Button onClick={() => setSubmitSuccess(false)} className="w-full mt-4">
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errors.general && (
                <p className="mt-2 text-sm text-red-600 text-center">{errors.general}</p>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby="name-error"
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-2 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby="email-error"
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-2 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby="message-error"
                ></Textarea>
                {errors.message && (
                  <p id="message-error" role="alert" className="mt-2 text-sm text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}

          <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>
              For immediate assistance, please visit our{" "}
              <a href="/faq" className="text-indigo-600 hover:underline dark:text-indigo-400">
                FAQ page
              </a>{" "}
              or check our{" "}
              <a href="/docs" className="text-indigo-600 hover:underline dark:text-indigo-400">
                documentation
              </a>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
