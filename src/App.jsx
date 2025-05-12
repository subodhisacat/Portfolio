import React, { lazy, Suspense } from "react";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import Home from "./pages/Hero/Index";
// import PWAInstallPrompt from "./components/PWAInstallPrompt";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

// Lazy load components
const About = lazy(() => import("./pages/About/About"));
const Project = lazy(() => import("./pages/Project"));
const Contact = lazy(() => import("./pages/Contact"));
const Service = lazy(() => import("./pages/Service"));

const animation = {
  section: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, margin: "-100px" },
  },
};

// Custom Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col justify-center items-center h-screen text-red-500">
          <h2 className="text-2xl font-bold">Oops! Something went wrong</h2>
          <p className="mt-4">{this.state.error.toString()}</p>
        </div>
      );
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

// Loading Fallback Component
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-blue-500" />
  </div>
);

function App() {
  return (
    <div className="relative min-h-screen">
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <>
            {/* <PWAInstallPrompt /> */}
            <Suspense fallback={<LoadingFallback />}>
              <Navbar />
            </Suspense>

            <main className="relative">
              <Suspense fallback={<LoadingFallback />}>
                <section id="home">
                  <Home />
                </section>
              </Suspense>

              <Suspense fallback={<LoadingFallback />}>
                <motion.section
                  initial={animation.section.initial}
                  whileInView={animation.section.whileInView}
                  transition={animation.section.transition}
                  viewport={animation.section.viewport}
                  id="about"
                >
                  <About />
                </motion.section>
              </Suspense>

              <Suspense fallback={<LoadingFallback />}>
                <motion.section
                  initial={animation.section.initial}
                  whileInView={animation.section.whileInView}
                  transition={animation.section.transition}
                  viewport={animation.section.viewport}
                  id="service"
                >
                  <Service />
                </motion.section>
              </Suspense>

              <Suspense fallback={<LoadingFallback />}>
                <motion.section
                  initial={animation.section.initial}
                  whileInView={animation.section.whileInView}
                  transition={animation.section.transition}
                  viewport={animation.section.viewport}
                  id="projects"
                >
                  <Project />
                </motion.section>
              </Suspense>

              <Suspense fallback={<LoadingFallback />}>
                <motion.section
                  initial={animation.section.initial}
                  whileInView={animation.section.whileInView}
                  transition={animation.section.transition}
                  viewport={animation.section.viewport}
                  id="contact"
                >
                  <Contact />
                </motion.section>
              </Suspense>

              <Suspense fallback={<LoadingFallback />}>
                <motion.section
                  initial={animation.section.initial}
                  whileInView={animation.section.whileInView}
                  transition={animation.section.transition}
                  viewport={animation.section.viewport}
                  id="footer"
                >
                  <Footer />
                </motion.section>
              </Suspense>
            </main>
          </>
        </Suspense>
        <Toaster />
      </ErrorBoundary>
    </div>
  );
}

export default App;
