/* jest.config.ts */

import type { InitialOptionsTsJest } from "ts-jest";

const config: InitialOptionsTsJest = {
  preset: "ts-jest", // .ts와 .tsx을 CommonJS로 변환
  testEnvironment: "jsdom", // 테스트 환경으로 jsdom을 사용
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"], // 각각의 테스트 전에 실행할 모듈을 경로
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // tsconfig에서 절대경로 사용 시에 jest가 인식하도록 경로 매핑
  },
};

export default config;
