
import { useForm } from "react-hook-form";
import { createDocument } from "../api/documentApi.ts";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card.tsx";
import { Label } from "../components/ui/label.tsx";
import { Input } from "../components/ui/input.tsx";
import { Button } from "../components/ui/button.tsx";

export function WordForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const response = await createDocument(data);
        console.log(response);
    };

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col justify-center items-center min-h-screen">
            <main className="flex-1 p-6">
                <div className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Valoración de Activos</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="grid gap-4" onSubmit={onSubmit}>
                                <div className="grid gap-2">
                                    <Label htmlFor="category">Category</Label>
                                    <input id="category" name="category" {...register("category")}/>
                                    {errors.title && <span>This field is required</span>}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <input id="name" name="name" {...register("name")}/>
                                    {errors.size && <span>This field is required</span>}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="description">Description</Label>
                                    <input id="description" name="description" {...register("description")}/>
                                    {errors.lastModified && <span>This field is required</span>}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="value">Value</Label>
                                    <input id="value" name="value" {...register("value")}/>
                                    {errors.size && <span>This field is required</span>}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="risk">Risk</Label>
                                    <input id="risk" name="risk" {...register("risk")}/>
                                    {errors.size && <span>This field is required</span>}
                                </div>
                                <CardFooter>
                                    <button onClick={() => console.log("document")} type="submit">Save</button>
                                    <Button variant="outline" onClick={() => console.log('Cancel')}>Cancel</Button>
                                </CardFooter>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}