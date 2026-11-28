import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import {
    isValidEmail,
    INPUT_ERROR_CLASS,
    INPUT_CLASS,
    INPUT_STYLE
} from "../../data/formConstants";
import FullyHacksLogo from "../../assets/FullyHacksLogo.svg";
import Background from "../../assets/ApplicationPage/Background.svg";

const STORAGE_KEY = "fullyhacks-interest-form-response";

export function InterestForm() {

  const [form, setForm] = useState(() => {
    const defaults = {
      firstName: "",
      lastName: "",
      email: "",
    };
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...defaults, ...parsed.form };
      }
    //   eslint-disable-next-line no-empty
    } catch {}
    return defaults;
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ form }));
      // eslint-disable-next-line no-empty
    } catch {}
    }, [form]);

  const updateField = (field: string, value: string | boolean) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setForm((prev: Record<string, any>) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!form.firstName.trim()) errs.firstName = "First name is required";
    if (!form.lastName.trim()) errs.lastName = "Last name is required";

    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!isValidEmail(form.email)) {
      errs.email = "Please enter a valid email address";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "interestFormResponses"),
      {
        ...form,
        createdAt: serverTimestamp()
      });

      localStorage.removeItem(STORAGE_KEY);
      setIsSubmitted(true);

    } catch (err) {
      console.error("Failed to submit application:", err);
      alert("Something went wrong submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center text-slate-100 relative"
      style={{ background: "linear-gradient(180deg, #2C739A 0%, #1D244C 100%)" }}
    >
      <div className="flex flex-col items-center pt-6 md:pt-10 z-1 px-4">
        <img src={FullyHacksLogo} alt="FullyHacksLogo" className="w-36 md:w-60" />
        <h1 className="font-nemo text-4xl md:text-8xl text-[#FFF5F5] text-center">
          2027 INTEREST FORM
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl z-1 flex flex-col gap-5 md:gap-6 px-4 md:px-6 py-6 md:py-10"
        noValidate
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="application-firstName" className="font-baloo text-xl text-[#EFEFEF]">
              First Name
            </label>
            <input
              id="application-firstName"
              type="text"
              value={form.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
              placeholder="John"
              className={errors.firstName ? INPUT_ERROR_CLASS : INPUT_CLASS}
              style={INPUT_STYLE}
            />
            {errors.firstName && (
              <span className="font-baloo text-sm text-red-400">{errors.firstName}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="application-lastName" className="font-baloo text-xl text-[#EFEFEF]">
              Last Name
            </label>
            <input
              id="application-lastName"
              type="text"
              value={form.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
              placeholder="Doe"
              className={errors.lastName ? INPUT_ERROR_CLASS : INPUT_CLASS}
              style={INPUT_STYLE}
            />
            {errors.lastName && (
              <span className="font-baloo text-sm text-red-400">{errors.lastName}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="application-email" className="font-baloo text-xl text-[#EFEFEF]">
            Email
          </label>
          <input
            id="application-email"
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value.toLowerCase().trim())}
            placeholder="johndoe@gmail.com"
            className={errors.email ? INPUT_ERROR_CLASS : INPUT_CLASS}
            style={INPUT_STYLE}
          />
          {errors.email && <span className="font-baloo text-sm text-red-400">{errors.email}</span>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 mx-auto px-10 md:px-16 py-3 md:py-4 rounded-2xl md:rounded-[23px] bg-[#72D6E6] text-[#246B8A] font-baloo text-xl md:text-2xl hover:bg-[#5bc0d0] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {isSubmitted && (
          <p className="text-center font-baloo text-xl text-[#EFEFEF]">
            Thanks for expressing interest! We’ll reach out when applications for FullyHacks 2027 open.
          </p>
        )}

      </form>

      <img
        src={Background}
        alt="Background"
        className="w-full absolute bottom-0 z-0 pointer-events-none"
      />
    </div>
  );
}