import {z} from 'zod';

export const MessageScehma = z.object({
    content: z.string().min(10, {message: "Message must be at least 10 characters long"}).max(300, {message: "Message must be at most 500 characters long"}),
});