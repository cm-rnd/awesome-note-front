/* setupTests.ts */

/*
 * 각 테스트 파일에서 @testing-library를 사용하기 위해 필요한 코어를 import한다.
 * 이는 Jest의 config파일에서 사용되며 이를 통해 import의 반복을 줄일 수 있다.
 */

import '@testing-library/jest-dom/extend-expect'