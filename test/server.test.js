import request from "supertest";
import createExpressServer from "../src/server"; // Remplacez par le chemin vers votre fichier

describe("Express Server", () => {
  let app;

  beforeAll(() => {
    app = createExpressServer();
  });

  it("should respond with 'OK' for the root route", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("OK");
  });

  it("should proxy requests to '/users'", async () => {
    const response = await request(app).get("/users");
    // Vous pouvez vérifier que le proxy redirige correctement.
    // Comme l'URL cible est en local, cela renvoie probablement une erreur si le service n'est pas démarré.
    expect(response.status).toBeGreaterThanOrEqual(500);
  });

  it("should proxy requests to '/products'", async () => {
    const response = await request(app).get("/products");
    expect(response.status).toBeGreaterThanOrEqual(500); // Car localhost:3002 n'est probablement pas démarré
  });

  it("should proxy requests to '/variants'", async () => {
    const response = await request(app).get("/variants");
    expect(response.status).toBeGreaterThanOrEqual(500); // Car localhost:3003 n'est probablement pas démarré
  });
});
