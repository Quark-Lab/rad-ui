export interface RegistryFile {
  path: string;
  type: string;
  content: string;
}

export interface RegistryItem {
  name: string;
  type: string;
  description: string;
  platform: string;
  dependencies: string[];
  registryDependencies: string[];
  files: RegistryFile[];
  utils?: { path: string; content: string };
}

export interface RegistryIndexItem {
  name: string;
  description: string;
  platform: string;
  dependencies: string[];
  registryDependencies: string[];
}

/**
 * Fetch a single component from the registry.
 */
export async function fetchComponent(
  registryUrl: string,
  name: string
): Promise<RegistryItem> {
  const url = `${registryUrl}/${name}.json`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch component "${name}": HTTP ${res.status}`);
  }
  return res.json() as Promise<RegistryItem>;
}

/**
 * Fetch the registry index (list of all available components).
 */
export async function fetchRegistryIndex(
  registryUrl: string
): Promise<RegistryIndexItem[]> {
  const url = `${registryUrl}/index.json`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch registry index: HTTP ${res.status}`);
  }
  return res.json() as Promise<RegistryIndexItem[]>;
}
