/**
 * Templates
 */
export interface Template {
    name: string;
    description: string;
    repo: TemplateRepository;
}
export interface TemplateRepository {
    uri: string;
    branch: string;
    path: string;
}
/** Loaders */
/**
 *
 * Installs template locally.
 *
 * @param template
 * @param output
 */
export declare function loadTemplate(template: Template, output: string): Promise<{
    status: 'ok';
    message: string;
} | {
    status: 'err';
    message: string;
}>;
