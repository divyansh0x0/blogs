export type FileNode = {
    type: "file";
    name: string;
    path:string;
    overview: string;
}

export type DirectoryNode = {
    type: "directory";
    name: string;
    children: Record<string, TreeNode>;
}
export type Path = {
    file: string;
    overview: string;

}
export type TreeNode = FileNode | DirectoryNode;

export function buildFileTree(files: [string, string][]): DirectoryNode {
    const root: DirectoryNode = {
        type: "directory",
        name: "",
        children: {}
    };

    for (const file of files) {
        const path = file[0];
        const pathOverview = file[1];
        const parts = path.split("/").filter(Boolean);
        let current = root;

        for (let index = 0; index < parts.length; index++) {
            const part = parts[index]!;
            const isFile = index === parts.length - 1;

            if (!current.children[part]) {
                current.children[part] = isFile
                    ? {type: "file", name: part, path:path, overview: pathOverview}
                    : {type: "directory", name: part, children: {}};
            }

            if (!isFile) {
                current = current.children[part] as DirectoryNode;
            }
        }
    }

    return root;
}
