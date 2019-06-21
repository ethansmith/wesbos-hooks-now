#!/usr/bin/env node
import { Template } from './loader';
export interface Options {
    force: boolean;
}
/**
 *
 * Creates a CLI tool from description and templates.
 *
 * @param templates
 * @param options
 */
export declare function creato(templates: Template[], options: Options): Promise<void>;
