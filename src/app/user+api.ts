import { ExpoRequest, ExpoResponse } from "expo-router/server";

export async function GET(): Promise<ExpoResponse> {
  return ExpoResponse.json({
    message: "Resposta da rota user"
  })
}

export async function POST(request: ExpoRequest): Promise<ExpoResponse> {
  const { email, password } = await request.json();

  if (email === "luizso@gmail.com" && password === "1234") {
    return ExpoResponse.json({
      email,
      name: "Luiz Oliveira"
    })
  }

  return new ExpoResponse("User or password incorrect!", {
    status: 404,
    headers: {
      "Content-Type": "text/plain"
    }
  })
}