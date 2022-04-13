PGDMP                         z            travel-agency %   10.19 (Ubuntu 10.19-0ubuntu0.18.04.1) %   10.19 (Ubuntu 10.19-0ubuntu0.18.04.1) w               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                       1262    28441    travel-agency    DATABASE     �   CREATE DATABASE "travel-agency" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'ru_RU.UTF-8' LC_CTYPE = 'ru_RU.UTF-8';
    DROP DATABASE "travel-agency";
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    13043    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false                       0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    38155    City    TABLE     �   CREATE TABLE public."City" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "countryId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."City";
       public         postgres    false    3            �            1259    38153    City_id_seq    SEQUENCE     �   CREATE SEQUENCE public."City_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."City_id_seq";
       public       postgres    false    3    207                       0    0    City_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."City_id_seq" OWNED BY public."City".id;
            public       postgres    false    206            �            1259    38235    Comfort    TABLE     �   CREATE TABLE public."Comfort" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Comfort";
       public         postgres    false    3            �            1259    38233    Comfort_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Comfort_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Comfort_id_seq";
       public       postgres    false    3    217                       0    0    Comfort_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Comfort_id_seq" OWNED BY public."Comfort".id;
            public       postgres    false    216            �            1259    38168    Complex    TABLE     �   CREATE TABLE public."Complex" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Complex";
       public         postgres    false    3            �            1259    38166    Complex_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Complex_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Complex_id_seq";
       public       postgres    false    209    3                       0    0    Complex_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Complex_id_seq" OWNED BY public."Complex".id;
            public       postgres    false    208            �            1259    38130 	   Continent    TABLE     �   CREATE TABLE public."Continent" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Continent";
       public         postgres    false    3            �            1259    38128    Continent_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Continent_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Continent_id_seq";
       public       postgres    false    203    3                       0    0    Continent_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Continent_id_seq" OWNED BY public."Continent".id;
            public       postgres    false    202            �            1259    38140    Country    TABLE     �   CREATE TABLE public."Country" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "continentId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Country";
       public         postgres    false    3            �            1259    38138    Country_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Country_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Country_id_seq";
       public       postgres    false    205    3                       0    0    Country_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Country_id_seq" OWNED BY public."Country".id;
            public       postgres    false    204            �            1259    38178    Hotel    TABLE     7  CREATE TABLE public."Hotel" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    address character varying(255) NOT NULL,
    "cityId" integer NOT NULL,
    "complexId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Hotel";
       public         postgres    false    3            �            1259    38176    Hotel_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Hotel_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Hotel_id_seq";
       public       postgres    false    3    211                       0    0    Hotel_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Hotel_id_seq" OWNED BY public."Hotel".id;
            public       postgres    false    210            �            1259    36687    Role    TABLE     �   CREATE TABLE public."Role" (
    id integer NOT NULL,
    value character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Role";
       public         postgres    false    3            �            1259    36685    Role_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Role_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Role_id_seq";
       public       postgres    false    3    197                       0    0    Role_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."Role_id_seq" OWNED BY public."Role".id;
            public       postgres    false    196            �            1259    38209    Tour    TABLE     F  CREATE TABLE public."Tour" (
    id integer NOT NULL,
    price double precision NOT NULL,
    "arrivalDates" character varying(255) NOT NULL,
    "durationDays" character varying(255) NOT NULL,
    "tourIncludes" character varying(16000),
    "additionalInfo" character varying(16000),
    "additionalPayment" character varying(16000),
    images jsonb,
    description character varying(16000) NOT NULL,
    "typeId" integer,
    "hotelId" integer,
    "transportId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Tour";
       public         postgres    false    3            �            1259    38245    TourComfort    TABLE     n   CREATE TABLE public."TourComfort" (
    id integer NOT NULL,
    "tourId" integer,
    "comfortId" integer
);
 !   DROP TABLE public."TourComfort";
       public         postgres    false    3            �            1259    38243    TourComfort_id_seq    SEQUENCE     �   CREATE SEQUENCE public."TourComfort_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."TourComfort_id_seq";
       public       postgres    false    3    219                       0    0    TourComfort_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."TourComfort_id_seq" OWNED BY public."TourComfort".id;
            public       postgres    false    218            �            1259    38207    Tour_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Tour_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Tour_id_seq";
       public       postgres    false    3    215                       0    0    Tour_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."Tour_id_seq" OWNED BY public."Tour".id;
            public       postgres    false    214            �            1259    38199 	   Transport    TABLE     �   CREATE TABLE public."Transport" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Transport";
       public         postgres    false    3            �            1259    38197    Transport_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Transport_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Transport_id_seq";
       public       postgres    false    213    3                       0    0    Transport_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Transport_id_seq" OWNED BY public."Transport".id;
            public       postgres    false    212            �            1259    38508    Type    TABLE     %  CREATE TABLE public."Type" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(1500) NOT NULL,
    image character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Type";
       public         postgres    false    3            �            1259    38506    Type_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Type_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Type_id_seq";
       public       postgres    false    3    221                       0    0    Type_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."Type_id_seq" OWNED BY public."Type".id;
            public       postgres    false    220            �            1259    36720    User    TABLE     k  CREATE TABLE public."User" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    avatar character varying(255) DEFAULT ''::character varying NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."User";
       public         postgres    false    3            �            1259    36734    UserRole    TABLE     h   CREATE TABLE public."UserRole" (
    id integer NOT NULL,
    "userId" integer,
    "roleId" integer
);
    DROP TABLE public."UserRole";
       public         postgres    false    3            �            1259    36732    UserRole_id_seq    SEQUENCE     �   CREATE SEQUENCE public."UserRole_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."UserRole_id_seq";
       public       postgres    false    3    201                       0    0    UserRole_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."UserRole_id_seq" OWNED BY public."UserRole".id;
            public       postgres    false    200            �            1259    36718    User_id_seq    SEQUENCE     �   CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."User_id_seq";
       public       postgres    false    3    199                       0    0    User_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;
            public       postgres    false    198            7           2604    38158    City id    DEFAULT     f   ALTER TABLE ONLY public."City" ALTER COLUMN id SET DEFAULT nextval('public."City_id_seq"'::regclass);
 8   ALTER TABLE public."City" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    206    207    207            <           2604    38238 
   Comfort id    DEFAULT     l   ALTER TABLE ONLY public."Comfort" ALTER COLUMN id SET DEFAULT nextval('public."Comfort_id_seq"'::regclass);
 ;   ALTER TABLE public."Comfort" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    216    217    217            8           2604    38171 
   Complex id    DEFAULT     l   ALTER TABLE ONLY public."Complex" ALTER COLUMN id SET DEFAULT nextval('public."Complex_id_seq"'::regclass);
 ;   ALTER TABLE public."Complex" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    209    208    209            5           2604    38133    Continent id    DEFAULT     p   ALTER TABLE ONLY public."Continent" ALTER COLUMN id SET DEFAULT nextval('public."Continent_id_seq"'::regclass);
 =   ALTER TABLE public."Continent" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    202    203    203            6           2604    38143 
   Country id    DEFAULT     l   ALTER TABLE ONLY public."Country" ALTER COLUMN id SET DEFAULT nextval('public."Country_id_seq"'::regclass);
 ;   ALTER TABLE public."Country" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    204    205    205            9           2604    38181    Hotel id    DEFAULT     h   ALTER TABLE ONLY public."Hotel" ALTER COLUMN id SET DEFAULT nextval('public."Hotel_id_seq"'::regclass);
 9   ALTER TABLE public."Hotel" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    211    210    211            1           2604    36690    Role id    DEFAULT     f   ALTER TABLE ONLY public."Role" ALTER COLUMN id SET DEFAULT nextval('public."Role_id_seq"'::regclass);
 8   ALTER TABLE public."Role" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    196    197    197            ;           2604    38212    Tour id    DEFAULT     f   ALTER TABLE ONLY public."Tour" ALTER COLUMN id SET DEFAULT nextval('public."Tour_id_seq"'::regclass);
 8   ALTER TABLE public."Tour" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    214    215    215            =           2604    38248    TourComfort id    DEFAULT     t   ALTER TABLE ONLY public."TourComfort" ALTER COLUMN id SET DEFAULT nextval('public."TourComfort_id_seq"'::regclass);
 ?   ALTER TABLE public."TourComfort" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    219    218    219            :           2604    38202    Transport id    DEFAULT     p   ALTER TABLE ONLY public."Transport" ALTER COLUMN id SET DEFAULT nextval('public."Transport_id_seq"'::regclass);
 =   ALTER TABLE public."Transport" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    212    213    213            >           2604    38511    Type id    DEFAULT     f   ALTER TABLE ONLY public."Type" ALTER COLUMN id SET DEFAULT nextval('public."Type_id_seq"'::regclass);
 8   ALTER TABLE public."Type" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    221    220    221            2           2604    36723    User id    DEFAULT     f   ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);
 8   ALTER TABLE public."User" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    198    199    199            4           2604    36737    UserRole id    DEFAULT     n   ALTER TABLE ONLY public."UserRole" ALTER COLUMN id SET DEFAULT nextval('public."UserRole_id_seq"'::regclass);
 <   ALTER TABLE public."UserRole" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    201    200    201            �          0    38155    City 
   TABLE DATA               Q   COPY public."City" (id, name, "countryId", "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    207   �                 0    38235    Comfort 
   TABLE DATA               G   COPY public."Comfort" (id, name, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    217   ,�       �          0    38168    Complex 
   TABLE DATA               G   COPY public."Complex" (id, name, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    209   f�       �          0    38130 	   Continent 
   TABLE DATA               I   COPY public."Continent" (id, name, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    203   ��       �          0    38140    Country 
   TABLE DATA               V   COPY public."Country" (id, name, "continentId", "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    205   ��       �          0    38178    Hotel 
   TABLE DATA               e   COPY public."Hotel" (id, name, address, "cityId", "complexId", "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    211   J�       �          0    36687    Role 
   TABLE DATA               R   COPY public."Role" (id, value, description, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    197   j�                 0    38209    Tour 
   TABLE DATA               �   COPY public."Tour" (id, price, "arrivalDates", "durationDays", "tourIncludes", "additionalInfo", "additionalPayment", images, description, "typeId", "hotelId", "transportId", "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    215   �                 0    38245    TourComfort 
   TABLE DATA               B   COPY public."TourComfort" (id, "tourId", "comfortId") FROM stdin;
    public       postgres    false    219   #�                 0    38199 	   Transport 
   TABLE DATA               I   COPY public."Transport" (id, name, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    213   b�       	          0    38508    Type 
   TABLE DATA               X   COPY public."Type" (id, name, description, image, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    221   ��       �          0    36720    User 
   TABLE DATA               ]   COPY public."User" (id, name, email, password, avatar, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    199   ��       �          0    36734    UserRole 
   TABLE DATA               <   COPY public."UserRole" (id, "userId", "roleId") FROM stdin;
    public       postgres    false    201   !�                  0    0    City_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."City_id_seq"', 1, true);
            public       postgres    false    206                        0    0    Comfort_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Comfort_id_seq"', 8, true);
            public       postgres    false    216            !           0    0    Complex_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Complex_id_seq"', 1, true);
            public       postgres    false    208            "           0    0    Continent_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Continent_id_seq"', 1, true);
            public       postgres    false    202            #           0    0    Country_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Country_id_seq"', 1, true);
            public       postgres    false    204            $           0    0    Hotel_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Hotel_id_seq"', 1, true);
            public       postgres    false    210            %           0    0    Role_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."Role_id_seq"', 2, true);
            public       postgres    false    196            &           0    0    TourComfort_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."TourComfort_id_seq"', 8, true);
            public       postgres    false    218            '           0    0    Tour_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."Tour_id_seq"', 1, true);
            public       postgres    false    214            (           0    0    Transport_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Transport_id_seq"', 1, true);
            public       postgres    false    212            )           0    0    Type_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."Type_id_seq"', 1, true);
            public       postgres    false    220            *           0    0    UserRole_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."UserRole_id_seq"', 6, true);
            public       postgres    false    200            +           0    0    User_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."User_id_seq"', 6, true);
            public       postgres    false    198            T           2606    38160    City City_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."City"
    ADD CONSTRAINT "City_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."City" DROP CONSTRAINT "City_pkey";
       public         postgres    false    207            b           2606    38242    Comfort Comfort_name_key 
   CONSTRAINT     W   ALTER TABLE ONLY public."Comfort"
    ADD CONSTRAINT "Comfort_name_key" UNIQUE (name);
 F   ALTER TABLE ONLY public."Comfort" DROP CONSTRAINT "Comfort_name_key";
       public         postgres    false    217            d           2606    38240    Comfort Comfort_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Comfort"
    ADD CONSTRAINT "Comfort_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Comfort" DROP CONSTRAINT "Comfort_pkey";
       public         postgres    false    217            V           2606    38175    Complex Complex_name_key 
   CONSTRAINT     W   ALTER TABLE ONLY public."Complex"
    ADD CONSTRAINT "Complex_name_key" UNIQUE (name);
 F   ALTER TABLE ONLY public."Complex" DROP CONSTRAINT "Complex_name_key";
       public         postgres    false    209            X           2606    38173    Complex Complex_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Complex"
    ADD CONSTRAINT "Complex_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Complex" DROP CONSTRAINT "Complex_pkey";
       public         postgres    false    209            L           2606    38137    Continent Continent_name_key 
   CONSTRAINT     [   ALTER TABLE ONLY public."Continent"
    ADD CONSTRAINT "Continent_name_key" UNIQUE (name);
 J   ALTER TABLE ONLY public."Continent" DROP CONSTRAINT "Continent_name_key";
       public         postgres    false    203            N           2606    38135    Continent Continent_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Continent"
    ADD CONSTRAINT "Continent_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."Continent" DROP CONSTRAINT "Continent_pkey";
       public         postgres    false    203            P           2606    38147    Country Country_name_key 
   CONSTRAINT     W   ALTER TABLE ONLY public."Country"
    ADD CONSTRAINT "Country_name_key" UNIQUE (name);
 F   ALTER TABLE ONLY public."Country" DROP CONSTRAINT "Country_name_key";
       public         postgres    false    205            R           2606    38145    Country Country_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Country"
    ADD CONSTRAINT "Country_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Country" DROP CONSTRAINT "Country_pkey";
       public         postgres    false    205            Z           2606    38186    Hotel Hotel_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Hotel"
    ADD CONSTRAINT "Hotel_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Hotel" DROP CONSTRAINT "Hotel_pkey";
       public         postgres    false    211            @           2606    36695    Role Role_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Role"
    ADD CONSTRAINT "Role_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Role" DROP CONSTRAINT "Role_pkey";
       public         postgres    false    197            B           2606    36697    Role Role_value_key 
   CONSTRAINT     S   ALTER TABLE ONLY public."Role"
    ADD CONSTRAINT "Role_value_key" UNIQUE (value);
 A   ALTER TABLE ONLY public."Role" DROP CONSTRAINT "Role_value_key";
       public         postgres    false    197            f           2606    38250    TourComfort TourComfort_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."TourComfort"
    ADD CONSTRAINT "TourComfort_pkey" PRIMARY KEY (id);
 J   ALTER TABLE ONLY public."TourComfort" DROP CONSTRAINT "TourComfort_pkey";
       public         postgres    false    219            h           2606    38252 ,   TourComfort TourComfort_tourId_comfortId_key 
   CONSTRAINT     |   ALTER TABLE ONLY public."TourComfort"
    ADD CONSTRAINT "TourComfort_tourId_comfortId_key" UNIQUE ("tourId", "comfortId");
 Z   ALTER TABLE ONLY public."TourComfort" DROP CONSTRAINT "TourComfort_tourId_comfortId_key";
       public         postgres    false    219    219            `           2606    38217    Tour Tour_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Tour"
    ADD CONSTRAINT "Tour_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Tour" DROP CONSTRAINT "Tour_pkey";
       public         postgres    false    215            \           2606    38206    Transport Transport_name_key 
   CONSTRAINT     [   ALTER TABLE ONLY public."Transport"
    ADD CONSTRAINT "Transport_name_key" UNIQUE (name);
 J   ALTER TABLE ONLY public."Transport" DROP CONSTRAINT "Transport_name_key";
       public         postgres    false    213            ^           2606    38204    Transport Transport_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Transport"
    ADD CONSTRAINT "Transport_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."Transport" DROP CONSTRAINT "Transport_pkey";
       public         postgres    false    213            j           2606    38518    Type Type_name_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public."Type"
    ADD CONSTRAINT "Type_name_key" UNIQUE (name);
 @   ALTER TABLE ONLY public."Type" DROP CONSTRAINT "Type_name_key";
       public         postgres    false    221            l           2606    38516    Type Type_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Type"
    ADD CONSTRAINT "Type_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Type" DROP CONSTRAINT "Type_pkey";
       public         postgres    false    221            H           2606    36739    UserRole UserRole_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."UserRole"
    ADD CONSTRAINT "UserRole_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."UserRole" DROP CONSTRAINT "UserRole_pkey";
       public         postgres    false    201            J           2606    36741 #   UserRole UserRole_userId_roleId_key 
   CONSTRAINT     p   ALTER TABLE ONLY public."UserRole"
    ADD CONSTRAINT "UserRole_userId_roleId_key" UNIQUE ("userId", "roleId");
 Q   ALTER TABLE ONLY public."UserRole" DROP CONSTRAINT "UserRole_userId_roleId_key";
       public         postgres    false    201    201            D           2606    36731    User User_email_key 
   CONSTRAINT     S   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_email_key" UNIQUE (email);
 A   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_email_key";
       public         postgres    false    199            F           2606    36729    User User_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_pkey";
       public         postgres    false    199            p           2606    38161    City City_countryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."City"
    ADD CONSTRAINT "City_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES public."Country"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 F   ALTER TABLE ONLY public."City" DROP CONSTRAINT "City_countryId_fkey";
       public       postgres    false    205    207    2898            o           2606    38148     Country Country_continentId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Country"
    ADD CONSTRAINT "Country_continentId_fkey" FOREIGN KEY ("continentId") REFERENCES public."Continent"(id) ON UPDATE CASCADE;
 N   ALTER TABLE ONLY public."Country" DROP CONSTRAINT "Country_continentId_fkey";
       public       postgres    false    2894    205    203            q           2606    38187    Hotel Hotel_cityId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Hotel"
    ADD CONSTRAINT "Hotel_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES public."City"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 E   ALTER TABLE ONLY public."Hotel" DROP CONSTRAINT "Hotel_cityId_fkey";
       public       postgres    false    2900    211    207            r           2606    38192    Hotel Hotel_complexId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Hotel"
    ADD CONSTRAINT "Hotel_complexId_fkey" FOREIGN KEY ("complexId") REFERENCES public."Complex"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 H   ALTER TABLE ONLY public."Hotel" DROP CONSTRAINT "Hotel_complexId_fkey";
       public       postgres    false    211    2904    209            v           2606    38258 &   TourComfort TourComfort_comfortId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."TourComfort"
    ADD CONSTRAINT "TourComfort_comfortId_fkey" FOREIGN KEY ("comfortId") REFERENCES public."Comfort"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public."TourComfort" DROP CONSTRAINT "TourComfort_comfortId_fkey";
       public       postgres    false    217    219    2916            u           2606    38253 #   TourComfort TourComfort_tourId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."TourComfort"
    ADD CONSTRAINT "TourComfort_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES public."Tour"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public."TourComfort" DROP CONSTRAINT "TourComfort_tourId_fkey";
       public       postgres    false    2912    215    219            s           2606    38223    Tour Tour_hotelId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Tour"
    ADD CONSTRAINT "Tour_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES public."Hotel"(id) ON UPDATE CASCADE;
 D   ALTER TABLE ONLY public."Tour" DROP CONSTRAINT "Tour_hotelId_fkey";
       public       postgres    false    2906    215    211            t           2606    38228    Tour Tour_transportId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Tour"
    ADD CONSTRAINT "Tour_transportId_fkey" FOREIGN KEY ("transportId") REFERENCES public."Transport"(id) ON UPDATE CASCADE;
 H   ALTER TABLE ONLY public."Tour" DROP CONSTRAINT "Tour_transportId_fkey";
       public       postgres    false    213    215    2910            n           2606    36747    UserRole UserRole_roleId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."UserRole"
    ADD CONSTRAINT "UserRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES public."Role"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public."UserRole" DROP CONSTRAINT "UserRole_roleId_fkey";
       public       postgres    false    2880    197    201            m           2606    36742    UserRole UserRole_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."UserRole"
    ADD CONSTRAINT "UserRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public."UserRole" DROP CONSTRAINT "UserRole_userId_fkey";
       public       postgres    false    199    2886    201            �   8   x�3估�¾��vpr���+�XX����j������ �S          *  x�}QKN�0\ۧ����I�H\��-�T�E�+Ă#��@ڒr�y7�9j��XH�b{<�f޳o�ҊQS��*��JY77F]+k�/�qnb����fs���a6�2�H:�l��:R��Fђ�\q�N����3W$�Hz�[^�Gv�[�[Lnc^p:�.)9@2����Y�=���B�ܧezH���I?���n_�Ra�s�xB�W#̭�!����
<�Yu�kP+|�
T�I�k3M�����f�s�;�ݞ��JO�Sy�ƅ�� �\�����g�Q��\�@e���"O����ZJ�p��      �   ?   x�3�0�¾���.츰��m6p���+�X�������1)�=... �i      �   :   x�3估�¾��/���id`d�k`�kh�`hbe`ae`�gan�m`�G�+F��� �~�      �   ;   x�3估�¾��/���i�id`d�k`�kh�`hbe`aeb�g`�m`�[�+F��� ��o      �     x�}PMN�@]�)�����ў��PLd���\�Ѝ.܌-m�p�����6��L��O��{4Z�-���8��7X-Py�wZ�5��Ix�Ƿh������oa�P��5�n�.ID��B���ҵ���΃j+�1�F�x����O"����n�$�S�j��RYI�O���Pw'��&�4L=R�צ/Yq2��<l��Z�q9=�D}$di�?C~���r0�<I���%Ja���q�?��D��0��0��D�tū�*X^//��Ƚ	\�����      �   w   x�3�tt����0�{.츰����.6\�p��¾��FFF�&��
��VF�V�zf�f��x���8C�]�8/̿����=��M`3����Z����͍��
������ kx<�         "  x��Y�rU]�_1^s�����l�!��U����ے��r	,( ��ɒF���?��t߹ϑ�U���}��������ٳӁ}�MeWvjk�\�����������4v?������[��%=����Tvӎ���ʮ������eE_f4gM���M�o��c}Z�mE�o���عmLEOӊj̚�cچO��ZV��S��?`�z�c�	����!��Y:��n�/��MX����=�n/e��mMW�i�aEi�����E�;(���SZ����7����rbCg�WQN��[Z���g���oXN�
�@�d�v(�M��Nh���ܾ��3��iÉ]T|6�g��E��*�oM/�z3ؐ�^����F��1O�-x�6��##v�[�F[���a�,7e��%-��Ee��5I:�H$�:߹w&���z�Fk֧7�~���/:UB�}gG��;�]y���6씱�l"���[�ـ��dg��%#�.I��X9��%�Ȃ�|�ٚ��4xO�'ް�@������D�b5�=.ʢl����[�z�Ru�s8��c��������q��tB������qiKj��nu���3���aǩIc;"RF�zv�/Q4c�T||��ICa��C��{�D�����1!:�q\��3w@R~c�TW⮰��Օ�	dyǖ��([���.��9�:l��k�	��*W��ҋ@5��e�GI�c̎�NL�^C�ӺD"a��v�k'����) ����mɑ���H;RG�c����mT_�b"��|ؔ#�6eE��?`К7�iz�/����GX�r�z��a0spۋ�X�㣳�p`?h^B� 
�ʼR!�>%7&Yw!�Q8�Y%I%! n�^
�qڄ�4f���/i��p�O,�t?�@��;� y(�@n]�W���%�A��c�k�5��6�X�TW@zZ#��-M�Q�{�H%�e����0�h�
V�M���=��O�)��]�tj0̱<�4H����Q����RH_BBT�e�%�d�LW��& �1n�yj���`��L� ���RWq3#'	~�`�2ʇ8V�`�Ġ�Q5ћ��d�QM�O_^4X�R4�S
)��Dty�bE��[O�5�H� �J�>(��]Z1���Bn�빓���:�b��W��-ܴ9QJZ��U�l�U$�S�<Q�p�N.�+�Yi��Ձ���c�up��r?��!eJj�
�󠾳$dy�P"�K�OS�/�B�Zv7��rD�L���P���b�L��䚧-�4SSDҤzrP>����呪�Xtq�jQEl�G`��OU洨��H�Ԫ�X,BI�B�VL���fdg͌;�W�H3+�;���ӿD|�/��
1a��K����LG�ӻ���?d*AW=��BR� �p7�_/+�TdU��=}�b<�}��J^�h�baV��W��q�U�D�B`,y7�G4S-$崐�����VT}Q����R�I2v��B\�.)g�����Ng�io�@�(��t���6��cZ^�=�Hs1��1�NU!�GH���{S8'�<J�}�Ɣ��$:�.����X0p�B��a�a�Q����዁�m8�F�gTFzBB���A�
[�A��|��;��(���|���5`�Q�k�l�po��zQ���\5��%Y�.�e�"�	/H��{о,�U_M���������)V2Y̭�����2;"��Wq�\<k�@��p���o{�p���[�nHp�fk���{w�Y�Q/��!���z�NTq�>[�[\���d�;��!�+�`%���0B���ʵ�B��Ƥ�9�.�I��N����#^Rg����N����g´�krr���ѐ��>��c"�06�W��}��<���`��0�5���MȄK]�{��j�D��x[���H�r� .I�?��9�-�s��K\�+x�PR�6j��b�T�kh���"*k�$�%��IC#��c�BsFJL+����MRQ����V9����E��Ɋs�����O��ON���=�Ξ>?�����gO�~r�����/�GGG���o         /   x�Ĺ 0��-�3�y�q�u����	�N���.Z7����;���Y         K   x�3估����.l���� ���֋@��'^l�������H��D��X���
���,̴��Hq��qqq 2!l      	   �  x�}T[�A��U��ҝ�5¬�%��cbb4� aFƀNb��Ǹ������f�v�9��y���[��Wu�"�%������Hj�Ў��N*�Sb�%����F��υ$�bţɌ̤���f$A������K����A=���ۅd� ���<�qq����F��#���8}�#��'����pbz#~f�N���( �ʎ��Y��s 6�V�X��W�T��ۡ*sٱD�4X� Zbd����I/����=(*Z?��G!��"Am���ȌbH��P�)Z�oN!k�!KH�d��Բ~�Čz=N<<ws����O�"�6������Ö�oh�
���%;���~� O��4��2�y����8�8��N��
�r�b�4��R5�^u�2�hl �aF��O��NK��/�W�3?vN��0Ř������b�X�SEG�$�v�����ze���i�Iiլ��zwy�}�ʱ^�Չ#'�d��z%����q��cͥ(���	�j��
��QXT�.�������|�S��q1)�032{�3�.��if�z�.�I�%N%����>�y���5О�xF��xp�v~�.]���π�����[�*�&��qQ�H����t�VIV��N�]5�n�i��~#�޼h�~�u��~�jtzỏo+����VPo���u=����v�~5��U}V�տ�Br      �   �  x�u��n�@F��Sd�]���*0��	D�"�c��o��}�.�Eէ�*U��38oTEU⨋�tF�����P}��<||���Y�X�����\8$�C��-��.���h>�w�7�Vx	��v6v}q��K;�^� �Y�z�	A�HH��v����4T{�������K�����T�&ޤ����I�A������j��Ew�S#`�ʲ%��������ȲUڀ0�cC��)��* �$�3���D��N�%�nfLQ��N�r��d��@ ]~��%�P}�~U����z���K��'-{'/��K����Bs�ga���&����Hƶ�����b��c`P�&SC�,Tߪ�]u�$#�e.e�p�<�l�s컝`ܟ�8 $�o���8��F�j�~���o�27�Q�L��k�.3=��w�\�u���&�@��o����l�؅2>��WͶp�_�Q��޶�DT�$��zQ�������¹u��e�΄��n_x�4	�����)W���Tp2O6����b�W�{���,l�%��&9]�3�|Q*~�x{y��[���Y�1c<�W�A�pi�L�,c����x�>���A��^�����u�/'��(�8)6*      �   *   x���	 0��l1�ո�:���T�o��%tO�g>�     