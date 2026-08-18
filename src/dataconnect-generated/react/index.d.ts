import { CreateProfileDataData, CreateProfileDataVariables, UpdateMyProfileData, UpdateMyProfileVariables, DeleteMyProfileData, GetMyProfileData, ListAllProfilesData, CreateProjectData, CreateProjectVariables, UpdateProjectData, UpdateProjectVariables, DeleteProjectData, DeleteProjectVariables, GetProjectData, GetProjectVariables, ListMyProjectsData, CreateCategoryData, CreateCategoryVariables, UpdateCategoryData, UpdateCategoryVariables, DeleteCategoryData, DeleteCategoryVariables, GetCategoryData, GetCategoryVariables, ListCategoriesData, CreateSkillData, CreateSkillVariables, UpdateSkillData, UpdateSkillVariables, DeleteSkillData, DeleteSkillVariables, GetSkillData, GetSkillVariables, ListMySkillsData, CreateLinkData, CreateLinkVariables, UpdateLinkData, UpdateLinkVariables, DeleteLinkData, DeleteLinkVariables, GetLinkData, GetLinkVariables, ListMyLinksData, AddProjectCategoryData, AddProjectCategoryVariables, RemoveProjectCategoryData, RemoveProjectCategoryVariables, ListProjectCategoriesData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateProfileData(options?: useDataConnectMutationOptions<CreateProfileDataData, FirebaseError, CreateProfileDataVariables>): UseDataConnectMutationResult<CreateProfileDataData, CreateProfileDataVariables>;
export function useCreateProfileData(dc: DataConnect, options?: useDataConnectMutationOptions<CreateProfileDataData, FirebaseError, CreateProfileDataVariables>): UseDataConnectMutationResult<CreateProfileDataData, CreateProfileDataVariables>;

export function useUpdateMyProfile(options?: useDataConnectMutationOptions<UpdateMyProfileData, FirebaseError, UpdateMyProfileVariables | void>): UseDataConnectMutationResult<UpdateMyProfileData, UpdateMyProfileVariables>;
export function useUpdateMyProfile(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateMyProfileData, FirebaseError, UpdateMyProfileVariables | void>): UseDataConnectMutationResult<UpdateMyProfileData, UpdateMyProfileVariables>;

export function useDeleteMyProfile(options?: useDataConnectMutationOptions<DeleteMyProfileData, FirebaseError, void>): UseDataConnectMutationResult<DeleteMyProfileData, undefined>;
export function useDeleteMyProfile(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteMyProfileData, FirebaseError, void>): UseDataConnectMutationResult<DeleteMyProfileData, undefined>;

export function useGetMyProfile(options?: useDataConnectQueryOptions<GetMyProfileData>): UseDataConnectQueryResult<GetMyProfileData, undefined>;
export function useGetMyProfile(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyProfileData>): UseDataConnectQueryResult<GetMyProfileData, undefined>;

export function useListAllProfiles(options?: useDataConnectQueryOptions<ListAllProfilesData>): UseDataConnectQueryResult<ListAllProfilesData, undefined>;
export function useListAllProfiles(dc: DataConnect, options?: useDataConnectQueryOptions<ListAllProfilesData>): UseDataConnectQueryResult<ListAllProfilesData, undefined>;

export function useCreateProject(options?: useDataConnectMutationOptions<CreateProjectData, FirebaseError, CreateProjectVariables>): UseDataConnectMutationResult<CreateProjectData, CreateProjectVariables>;
export function useCreateProject(dc: DataConnect, options?: useDataConnectMutationOptions<CreateProjectData, FirebaseError, CreateProjectVariables>): UseDataConnectMutationResult<CreateProjectData, CreateProjectVariables>;

export function useUpdateProject(options?: useDataConnectMutationOptions<UpdateProjectData, FirebaseError, UpdateProjectVariables>): UseDataConnectMutationResult<UpdateProjectData, UpdateProjectVariables>;
export function useUpdateProject(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateProjectData, FirebaseError, UpdateProjectVariables>): UseDataConnectMutationResult<UpdateProjectData, UpdateProjectVariables>;

export function useDeleteProject(options?: useDataConnectMutationOptions<DeleteProjectData, FirebaseError, DeleteProjectVariables>): UseDataConnectMutationResult<DeleteProjectData, DeleteProjectVariables>;
export function useDeleteProject(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteProjectData, FirebaseError, DeleteProjectVariables>): UseDataConnectMutationResult<DeleteProjectData, DeleteProjectVariables>;

export function useGetProject(vars: GetProjectVariables, options?: useDataConnectQueryOptions<GetProjectData>): UseDataConnectQueryResult<GetProjectData, GetProjectVariables>;
export function useGetProject(dc: DataConnect, vars: GetProjectVariables, options?: useDataConnectQueryOptions<GetProjectData>): UseDataConnectQueryResult<GetProjectData, GetProjectVariables>;

export function useListMyProjects(options?: useDataConnectQueryOptions<ListMyProjectsData>): UseDataConnectQueryResult<ListMyProjectsData, undefined>;
export function useListMyProjects(dc: DataConnect, options?: useDataConnectQueryOptions<ListMyProjectsData>): UseDataConnectQueryResult<ListMyProjectsData, undefined>;

export function useCreateCategory(options?: useDataConnectMutationOptions<CreateCategoryData, FirebaseError, CreateCategoryVariables>): UseDataConnectMutationResult<CreateCategoryData, CreateCategoryVariables>;
export function useCreateCategory(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCategoryData, FirebaseError, CreateCategoryVariables>): UseDataConnectMutationResult<CreateCategoryData, CreateCategoryVariables>;

export function useUpdateCategory(options?: useDataConnectMutationOptions<UpdateCategoryData, FirebaseError, UpdateCategoryVariables>): UseDataConnectMutationResult<UpdateCategoryData, UpdateCategoryVariables>;
export function useUpdateCategory(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateCategoryData, FirebaseError, UpdateCategoryVariables>): UseDataConnectMutationResult<UpdateCategoryData, UpdateCategoryVariables>;

export function useDeleteCategory(options?: useDataConnectMutationOptions<DeleteCategoryData, FirebaseError, DeleteCategoryVariables>): UseDataConnectMutationResult<DeleteCategoryData, DeleteCategoryVariables>;
export function useDeleteCategory(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteCategoryData, FirebaseError, DeleteCategoryVariables>): UseDataConnectMutationResult<DeleteCategoryData, DeleteCategoryVariables>;

export function useGetCategory(vars: GetCategoryVariables, options?: useDataConnectQueryOptions<GetCategoryData>): UseDataConnectQueryResult<GetCategoryData, GetCategoryVariables>;
export function useGetCategory(dc: DataConnect, vars: GetCategoryVariables, options?: useDataConnectQueryOptions<GetCategoryData>): UseDataConnectQueryResult<GetCategoryData, GetCategoryVariables>;

export function useListCategories(options?: useDataConnectQueryOptions<ListCategoriesData>): UseDataConnectQueryResult<ListCategoriesData, undefined>;
export function useListCategories(dc: DataConnect, options?: useDataConnectQueryOptions<ListCategoriesData>): UseDataConnectQueryResult<ListCategoriesData, undefined>;

export function useCreateSkill(options?: useDataConnectMutationOptions<CreateSkillData, FirebaseError, CreateSkillVariables>): UseDataConnectMutationResult<CreateSkillData, CreateSkillVariables>;
export function useCreateSkill(dc: DataConnect, options?: useDataConnectMutationOptions<CreateSkillData, FirebaseError, CreateSkillVariables>): UseDataConnectMutationResult<CreateSkillData, CreateSkillVariables>;

export function useUpdateSkill(options?: useDataConnectMutationOptions<UpdateSkillData, FirebaseError, UpdateSkillVariables>): UseDataConnectMutationResult<UpdateSkillData, UpdateSkillVariables>;
export function useUpdateSkill(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateSkillData, FirebaseError, UpdateSkillVariables>): UseDataConnectMutationResult<UpdateSkillData, UpdateSkillVariables>;

export function useDeleteSkill(options?: useDataConnectMutationOptions<DeleteSkillData, FirebaseError, DeleteSkillVariables>): UseDataConnectMutationResult<DeleteSkillData, DeleteSkillVariables>;
export function useDeleteSkill(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteSkillData, FirebaseError, DeleteSkillVariables>): UseDataConnectMutationResult<DeleteSkillData, DeleteSkillVariables>;

export function useGetSkill(vars: GetSkillVariables, options?: useDataConnectQueryOptions<GetSkillData>): UseDataConnectQueryResult<GetSkillData, GetSkillVariables>;
export function useGetSkill(dc: DataConnect, vars: GetSkillVariables, options?: useDataConnectQueryOptions<GetSkillData>): UseDataConnectQueryResult<GetSkillData, GetSkillVariables>;

export function useListMySkills(options?: useDataConnectQueryOptions<ListMySkillsData>): UseDataConnectQueryResult<ListMySkillsData, undefined>;
export function useListMySkills(dc: DataConnect, options?: useDataConnectQueryOptions<ListMySkillsData>): UseDataConnectQueryResult<ListMySkillsData, undefined>;

export function useCreateLink(options?: useDataConnectMutationOptions<CreateLinkData, FirebaseError, CreateLinkVariables>): UseDataConnectMutationResult<CreateLinkData, CreateLinkVariables>;
export function useCreateLink(dc: DataConnect, options?: useDataConnectMutationOptions<CreateLinkData, FirebaseError, CreateLinkVariables>): UseDataConnectMutationResult<CreateLinkData, CreateLinkVariables>;

export function useUpdateLink(options?: useDataConnectMutationOptions<UpdateLinkData, FirebaseError, UpdateLinkVariables>): UseDataConnectMutationResult<UpdateLinkData, UpdateLinkVariables>;
export function useUpdateLink(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateLinkData, FirebaseError, UpdateLinkVariables>): UseDataConnectMutationResult<UpdateLinkData, UpdateLinkVariables>;

export function useDeleteLink(options?: useDataConnectMutationOptions<DeleteLinkData, FirebaseError, DeleteLinkVariables>): UseDataConnectMutationResult<DeleteLinkData, DeleteLinkVariables>;
export function useDeleteLink(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteLinkData, FirebaseError, DeleteLinkVariables>): UseDataConnectMutationResult<DeleteLinkData, DeleteLinkVariables>;

export function useGetLink(vars: GetLinkVariables, options?: useDataConnectQueryOptions<GetLinkData>): UseDataConnectQueryResult<GetLinkData, GetLinkVariables>;
export function useGetLink(dc: DataConnect, vars: GetLinkVariables, options?: useDataConnectQueryOptions<GetLinkData>): UseDataConnectQueryResult<GetLinkData, GetLinkVariables>;

export function useListMyLinks(options?: useDataConnectQueryOptions<ListMyLinksData>): UseDataConnectQueryResult<ListMyLinksData, undefined>;
export function useListMyLinks(dc: DataConnect, options?: useDataConnectQueryOptions<ListMyLinksData>): UseDataConnectQueryResult<ListMyLinksData, undefined>;

export function useAddProjectCategory(options?: useDataConnectMutationOptions<AddProjectCategoryData, FirebaseError, AddProjectCategoryVariables>): UseDataConnectMutationResult<AddProjectCategoryData, AddProjectCategoryVariables>;
export function useAddProjectCategory(dc: DataConnect, options?: useDataConnectMutationOptions<AddProjectCategoryData, FirebaseError, AddProjectCategoryVariables>): UseDataConnectMutationResult<AddProjectCategoryData, AddProjectCategoryVariables>;

export function useRemoveProjectCategory(options?: useDataConnectMutationOptions<RemoveProjectCategoryData, FirebaseError, RemoveProjectCategoryVariables>): UseDataConnectMutationResult<RemoveProjectCategoryData, RemoveProjectCategoryVariables>;
export function useRemoveProjectCategory(dc: DataConnect, options?: useDataConnectMutationOptions<RemoveProjectCategoryData, FirebaseError, RemoveProjectCategoryVariables>): UseDataConnectMutationResult<RemoveProjectCategoryData, RemoveProjectCategoryVariables>;

export function useListProjectCategories(options?: useDataConnectQueryOptions<ListProjectCategoriesData>): UseDataConnectQueryResult<ListProjectCategoriesData, undefined>;
export function useListProjectCategories(dc: DataConnect, options?: useDataConnectQueryOptions<ListProjectCategoriesData>): UseDataConnectQueryResult<ListProjectCategoriesData, undefined>;
