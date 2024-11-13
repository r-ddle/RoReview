import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Zod validation schema
const formSchema = z.object({
  gameName: z.string().min(2, {
    message: "Game Name must be at least 2 characters.",
  }),
  gameDesc: z.string().min(2, {
    message: "Game Description must be at least 2 characters.",
  }),
  gameType: z.string().min(2, {
    message: "Game Type must be at least 2 characters.",
  }),
  gameURL: z.string().min(2, {
    message: "Game URL must be at least 2 characters.",
  }),
});

// Extract the TypeScript type from the Zod schema
type FormData = z.infer<typeof formSchema>;

export function GameForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gameName: "",
      gameDesc: "",
      gameType: "",
      gameURL: "",
    },
  });

  // Update the function type to accept the FormData type
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch('/api/send-to-discord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      form.reset();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-[400px] mx-auto rounded-lg p-4">
      <Form {...form}>
        <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="gameName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Game Name</FormLabel>
                <FormControl>
                  <Input placeholder="ex: Natural Disasters" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gameDesc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Game Description</FormLabel>
                <FormControl>
                  <Input placeholder="Tell us about the game" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gameType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Game Type</FormLabel>
                <FormControl>
                  <Input placeholder="ex: Horror, Friends, Action..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gameURL"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Game Link</FormLabel>
                <FormControl>
                  <Input placeholder="Link to the game" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
