import { pkg2 } from '@my-org/pkg2';

export function pkg1(): string {
  pkg2();

  return 'pkg1';
}
