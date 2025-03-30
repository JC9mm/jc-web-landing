import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ApiDocs from "@/components/ApiDocs";
import Footer from "@/components/Footer";

function App() {
  return (
    <div>
      <Hero />
      <Features />
      <ApiDocs />
      <Footer />
    </div>
  );
}

export default App;
