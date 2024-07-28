import { SigninUser } from "@/app/api/auth/signin/route";
import { SignupUser } from "@/app/api/auth/signup/route";
import { UpdatePassword } from "@/app/api/auth/update-password/route";
import { FixMeInput } from "@/app/api/fixme/route";
import axios from "axios";

class FixMeService {
  async signin({ email, password }: SigninUser) {
    const res = await axios.post("/api/auth/signin", { email, password });
    return res;
  }

  async signup({ email, password }: SignupUser) {
    const res = await axios.post("/api/auth/signup", { email, password });
    return res;
  }
  async signOut() {
    const res = await axios.post("/api/auth/signout");
    return res;
  }
  async resetPassword(email: string) {
    const res = await axios.post(`/api/auth/reset-password?email=${email}`);
    return res;
  }
  async updatePassword(updatePassword: UpdatePassword) {
    const res = await axios.post("/api/auth/update-password", updatePassword);
    return res;
  }
  async fixText({ text, mode }: FixMeInput) {
    const res = await axios.post("/api/fixme", { text, mode });
    return res;
  }
  async getTextsHistory() {
    const res = await axios.get("/api/texts");
    return res;
  }
  async getTextsById(textId: string) {
    const res = await axios.get(`/api/texts/${textId}`);
    return res;
  }
  async me() {
    const res = await axios.get("/api/me");
    return res;
  }
}

const imageService = new FixMeService();
export default imageService;
