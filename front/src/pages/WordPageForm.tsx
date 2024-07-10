
import { useForm } from "react-hook-form";
import { createDocument } from "../api/documentApi.ts";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card.tsx";
import { Label } from "../components/ui/label.tsx";
import { Input } from "../components/ui/input.tsx";
import { Button } from "../components/ui/button.tsx";

export function WordForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = handleSubmit(async (data) => {
        const response = await createDocument(data)
        console.log(response)
        window.alert("Los datos se han agregado con exitó")
        window.location.reload()

    });

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
                                    <Input id="category"  {...register("category")}/>
                                    {errors.title && <span>This field is required</span>}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name"{...register("name")}/>
                                    {errors.size && <span>This field is required</span>}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Input id="description" {...register("description")}/>
                                    {errors.lastModified && <span>This field is required</span>}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="value">Value</Label>
                                    <Input id="value" {...register("value")}/>
                                    {errors.size && <span>This field is required</span>}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="risk">Risk</Label>
                                    <Input id="risk"{...register("risk")}/>
                                    {errors.size && <span>This field is required</span>}
                                </div>
                                <CardFooter>
                                    <Button onClick={() => console.log("document")} type="submit">Save</Button>
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