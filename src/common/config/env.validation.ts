export function validateEnv(env: Record<string, unknown>): Record<string, unknown> {
  const requiredKeys = ['DATABASE_URL'];

  for (const key of requiredKeys) {
    const value = env[key];
    if (typeof value !== 'string' || value.trim().length === 0) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  }

  return env;
}

