import { SigninUser } from "@/app/api/auth/signin/route";
import { SignupUser } from "@/app/api/auth/signup/route";
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
  async fixText({ text, mode }: FixMeInput) {
    const res = await axios.post("/api/fixme", { text, mode });
    return res;
  }
  async getTextsHistory() {
    const res = await axios.post("/api/texts");
    return res;
  }
}

const imageService = new FixMeService();
export default imageService;
