'use client';

import * as React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { askAI, type AskAIState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Loader2, Send, Sparkles, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Message = {
  role: 'user' | 'ai' | 'loading';
  content: string;
  id: number;
};

const initialState: AskAIState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" disabled={pending}>
      {pending ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
      <span className="sr-only">Send</span>
    </Button>
  );
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [formState, formAction] = useFormState(askAI, initialState);
  const formRef = React.useRef<HTMLFormElement>(null);
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  React.useEffect(() => {
    if (formState.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: formState.error,
      });
      setMessages((prev) => prev.filter((msg) => msg.role !== 'loading'));
    }
    if (formState.answer && formState.question) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.role === 'loading'
              ? { ...msg, role: 'ai', content: formState.answer as string }
              : msg
          )
        );
    }
  }, [formState, toast]);

  React.useEffect(() => {
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleFormSubmit = (formData: FormData) => {
    const question = formData.get('question') as string;
    if (question.trim()) {
      setMessages((prev) => [
        ...prev,
        { role: 'user', content: question, id: Date.now() },
        { role: 'loading', content: '...', id: Date.now() + 1 },
      ]);
      formAction(formData);
      formRef.current?.reset();
    }
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg"
          >
            <Sparkles className="h-8 w-8" />
            <span className="sr-only">Open AI Assistant</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <SheetHeader>
            <SheetTitle>AI Portfolio Assistant</SheetTitle>
          </SheetHeader>
          <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
            <div className="space-y-6 py-4">
              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarFallback><Bot /></AvatarFallback>
                </Avatar>
                <div className="rounded-lg bg-secondary p-3 text-secondary-foreground">
                  <p>Hello! Ask me anything about this portfolio, and I'll do my best to answer based on the provided information.</p>
                </div>
              </div>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    'flex items-start gap-3',
                    message.role === 'user' && 'justify-end'
                  )}
                >
                  {message.role !== 'user' && (
                     <Avatar>
                        <AvatarFallback>
                            {message.role === 'loading' ? <Loader2 className="animate-spin" /> : <Bot />}
                        </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      'max-w-[80%] rounded-lg p-3',
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    )}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                  {message.role === 'user' && (
                     <Avatar>
                        <AvatarFallback><User /></AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
          <SheetFooter>
            <form action={handleFormSubmit} ref={formRef} className="flex w-full items-center gap-2 pt-4">
              <Input
                name="question"
                placeholder="Ask about projects, skills..."
                className="flex-1"
                required
              />
              <SubmitButton />
            </form>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
