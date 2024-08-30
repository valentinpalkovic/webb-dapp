import { beforeAll } from 'vitest';
import { setProjectAnnotations } from '@storybook/experimental-nextjs-vite';
import * as projectAnnotiations from './preview';

const project = setProjectAnnotations(projectAnnotiations);

beforeAll(project.beforeAll);
