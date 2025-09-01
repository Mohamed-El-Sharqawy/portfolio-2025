import { useRef, useState } from "react";
import { toast } from "sonner";

export default function useContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const getSubscribed = ({
    name,
    email,
    message,
  }: {
    name: string;
    email: string;
    message: string;
  }) => {
    return `
      <div style="background-color: #121212; color: #e0e0e0; padding: 40px; font-family: Arial, sans-serif; line-height: 1.6;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #1e1e1e; padding: 30px; border-radius: 10px; border: 1px solid #333;">
          <h2 style="color: #64ffda; text-align: center; margin-bottom: 20px;">Thank you for reaching out, ${name}!</h2>
          <p style="font-size: 16px; margin-bottom: 20px;">I have received your message and will get back to you as soon as possible.</p>
          <div style="background-color: #2c2c2c; padding: 20px; border-radius: 8px;">
            <h3 style="color: #64ffda; margin-top: 0; border-bottom: 1px solid #444; padding-bottom: 10px;">Message Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> Portfolio Inquiry from Mohamed Ahmed</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: #333; padding: 15px; border-radius: 5px;">${message}</p>
          </div>
          <p style="text-align: center; font-size: 14px; color: #888; margin-top: 30px;">This email was sent from your portfolio website. Powered by your code.</p>
        </div>
      </div>
    `;
  };

  const sendMail = async (
    e: React.FormEvent,
    formData: { name: string; email: string; subject: string; message: string }
  ) => {
    e.preventDefault();
    setIsLoading(true);

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all the fields.", {
        id: "form_empty_fields",
      });
      setIsLoading(false);
      return;
    }

    if (!regex.test(formData.email)) {
      toast.error("Please enter a valid email.", {
        id: "form_invalid_email",
      });
      setIsLoading(false);
      return;
    }

    const emailBody = getSubscribed({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    try {
      const res = await fetch("https://sendmail-api-docs.vercel.app/api/send", {
        method: "POST",
        body: JSON.stringify({
          to: formData.email,
          subject: formData.subject,
          message: emailBody,
        }),
      });

      const data = await res.json();

      if (data?.success) {
        toast.success("Message has been sent, Thanks for reaching 😊.", {
          id: "message_success",
        });
        form.current?.reset();
      } else {
        toast.error("Something Went Wrong, Please Try Again!", {
          id: "message_fail",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something Went Wrong, Please Try Again!", {
        id: "message_fail_catch",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMail, isLoading, form };
}
