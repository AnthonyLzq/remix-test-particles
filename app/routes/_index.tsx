import type { V2_MetaFunction } from "@remix-run/node";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadSlim } from 'tsparticles-slim'

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const particlesConfig: ISourceOptions = {
  background: {
    color: {
      value: '#1B2327'
    }
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#ffffff'
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce'
      },
      random: false,
      speed: 1,
      straight: false
    },
    number: {
      // density: {
      //   enable: true,
      //   area: 1500
      // },
      value: 150
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      value: { min: 1, max: 5 }
    }
  },
  retina_detect: true
}

export default function Index() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Particles
        init={particlesInit}
        className="particles"
        params={particlesConfig}
        loaded={async () => {
          console.log('hi')
        }}
      />
      <section style={{ padding: '8px' }}>
        <h1>Welcome to Remix</h1>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
